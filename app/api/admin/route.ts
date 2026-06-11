import { NextRequest, NextResponse } from "next/server";

const VERCEL_TOKEN   = process.env.VERCEL_ACCESS_TOKEN;
const VERCEL_PROJECT = process.env.VERCEL_PROJECT_ID;
const VERCEL_TEAM    = process.env.VERCEL_TEAM_ID;
const ADMIN_PASSWORD = process.env.ADMIN_PASSSWORD ?? "DH@Admin2026";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: NextRequest) {
  const pwd = req.nextUrl.searchParams.get("pwd");
  if (pwd !== ADMIN_PASSWORD) return unauthorized();

  // Return env diagnostic so admin can see what's missing
  if (!VERCEL_TOKEN || !VERCEL_PROJECT) {
    return NextResponse.json({
      configured: false,
      debug: {
        hasToken:   !!VERCEL_TOKEN,
        hasProject: !!VERCEL_PROJECT,
        hasTeam:    !!VERCEL_TEAM,
        projectId:  VERCEL_PROJECT ? `${VERCEL_PROJECT.slice(0, 8)}…` : null,
      },
    });
  }

  const teamParam = VERCEL_TEAM ? `&teamId=${VERCEL_TEAM}` : "";
  const now   = new Date();
  const from  = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const base  = `https://vercel.com/api/web-analytics/v1`;
  const range = `projectId=${VERCEL_PROJECT}${teamParam}&from=${from.toISOString()}&to=${now.toISOString()}`;
  const headers = { Authorization: `Bearer ${VERCEL_TOKEN}` };

  try {
    const [metricsRes, pagesRes, referrersRes, timeseriesRes] = await Promise.all([
      fetch(`${base}/metrics?${range}`,           { headers }),
      fetch(`${base}/pages?${range}&limit=5`,     { headers }),
      fetch(`${base}/referrers?${range}&limit=5`, { headers }),
      fetch(`${base}/timeseries?${range}`,        { headers }),
    ]);

    // Always capture raw text first for debugging
    const [metricsText, pagesText, referrersText, timeseriesText] = await Promise.all([
      metricsRes.text(),
      pagesRes.text(),
      referrersRes.text(),
      timeseriesRes.text(),
    ]);

    // If any call failed, return diagnostic
    if (!metricsRes.ok) {
      return NextResponse.json({
        configured: false,
        debug: {
          hasToken: true, hasProject: true,
          apiStatus: metricsRes.status,
          apiBody: metricsText.slice(0, 500),
          url: `${base}/metrics?projectId=${VERCEL_PROJECT.slice(0, 8)}…`,
        },
      });
    }

    const rawMetrics    = JSON.parse(metricsText);
    const rawPages      = JSON.parse(pagesText);
    const rawReferrers  = JSON.parse(referrersText);
    const rawTimeseries = JSON.parse(timeseriesText);

    const m = rawMetrics?.data ?? rawMetrics;
    const metrics = {
      totalPageviews: m?.pageViews   ?? m?.pageviews   ?? m?.views          ?? m?.totalPageviews ?? 0,
      uniqueVisitors: m?.visitors    ?? m?.uniqueUsers  ?? m?.uniqueVisitors ?? 0,
      avgDuration:    m?.avgDuration ?? m?.averageDuration ?? m?.avgVisitDuration ?? m?.sessionDuration ?? 0,
      bounceRate:     m?.bounceRate  ?? m?.bounce       ?? 0,
    };

    const pages      = (rawPages?.data      ?? rawPages      ?? []).slice(0, 5);
    const referrers  = (rawReferrers?.data  ?? rawReferrers  ?? []).slice(0, 5);
    const timeseries = (rawTimeseries?.data ?? rawTimeseries ?? []);

    return NextResponse.json({ configured: true, metrics, pages, referrers, timeseries, _raw: rawMetrics });
  } catch (err) {
    return NextResponse.json({ configured: false, debug: { error: String(err) } });
  }
}
