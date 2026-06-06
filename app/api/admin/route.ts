import { NextRequest, NextResponse } from "next/server";

const VERCEL_TOKEN   = process.env.VERCEL_ACCESS_TOKEN;
const VERCEL_PROJECT = process.env.VERCEL_PROJECT_ID;   // must start with prj_
const VERCEL_TEAM    = process.env.VERCEL_TEAM_ID;      // starts with team_
const ADMIN_PASSWORD = "DH@Admin2026";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: NextRequest) {
  // Password check
  const pwd = req.nextUrl.searchParams.get("pwd");
  if (pwd !== ADMIN_PASSWORD) return unauthorized();

  // If Vercel Analytics not configured, return setup flag
  if (!VERCEL_TOKEN || !VERCEL_PROJECT) {
    return NextResponse.json({ configured: false });
  }

  const teamParam = VERCEL_TEAM ? `&teamId=${VERCEL_TEAM}` : "";
  const now   = new Date();
  const from  = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const base  = `https://vercel.com/api/v1/web-analytics`;
  const range = `projectId=${VERCEL_PROJECT}${teamParam}&from=${from.toISOString()}&to=${now.toISOString()}`;

  const headers = { Authorization: `Bearer ${VERCEL_TOKEN}` };

  try {
    const [metricsRes, pagesRes, referrersRes, timeseriesRes] = await Promise.all([
      fetch(`${base}/metrics?${range}`,     { headers }),
      fetch(`${base}/pages?${range}&limit=5`,      { headers }),
      fetch(`${base}/referrers?${range}&limit=5`,  { headers }),
      fetch(`${base}/timeseries?${range}`,  { headers }),
    ]);

    const [metrics, pages, referrers, timeseries] = await Promise.all([
      metricsRes.json(),
      pagesRes.json(),
      referrersRes.json(),
      timeseriesRes.json(),
    ]);

    return NextResponse.json({ configured: true, metrics, pages, referrers, timeseries });
  } catch {
    return NextResponse.json({ configured: false, error: "Failed to fetch analytics" });
  }
}
