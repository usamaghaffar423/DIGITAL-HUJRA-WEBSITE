"use client";

import { MotionConfig } from "motion/react";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { SERVICES, type ServiceId } from "../_lib/content";

type PlanContextValue = {
  services: readonly ServiceId[];
  toggleService: (id: ServiceId) => void;
  isSelected: (id: ServiceId) => boolean;
};

const PlanContext = createContext<PlanContextValue | null>(null);

/** Order selections by service priority so summaries and messages read consistently. */
const ORDER = new Map(SERVICES.map((s, i) => [s.id, i]));

/**
 * Shares the selected services between the services grid and the calculator,
 * and applies the user's reduced-motion preference to every animation.
 */
export function PlanProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<readonly ServiceId[]>([]);

  const toggleService = useCallback((id: ServiceId) => {
    setServices((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id].sort((a, b) => (ORDER.get(a) ?? 0) - (ORDER.get(b) ?? 0)),
    );
  }, []);

  const value = useMemo<PlanContextValue>(
    () => ({ services, toggleService, isSelected: (id) => services.includes(id) }),
    [services, toggleService],
  );

  return (
    <PlanContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </PlanContext.Provider>
  );
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
