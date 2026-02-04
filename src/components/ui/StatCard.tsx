import React from "react";

export function StatCard({
  label,
  value,
  sub,
  trend,
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  trend?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-textMuted uppercase tracking-wide">
          {label}
        </div>
        {trend ? (
          <span className="rounded-full bg-success/10 px-2 py-0.5 text-success text-[11px]">
            {trend}
          </span>
        ) : null}
      </div>
      <div className="mt-2 flex items-center gap-3">
        {icon ? (
          <div className="h-9 w-9 rounded-lg bg-brand-600/10 text-brand-600 grid place-items-center">
            {icon}
          </div>
        ) : null}
        <div className="text-3xl font-semibold">{value}</div>
      </div>
      {sub ? <div className="mt-2 text-xs text-neutral-textMuted">{sub}</div> : null}
    </div>
  );
}
