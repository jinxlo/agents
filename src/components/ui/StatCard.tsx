export function StatCard({
  label,
  value,
  sub,
  trend,
}: {
  label: string;
  value: string;
  sub?: string;
  trend?: string;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-textMuted">{label}</div>
        {trend ? <span className="text-xs text-success">{trend}</span> : null}
      </div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {sub ? <div className="text-xs text-neutral-textMuted mt-2">{sub}</div> : null}
    </div>
  );
}
