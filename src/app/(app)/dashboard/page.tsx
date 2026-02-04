import { Topbar } from "@/components/layout/Topbar";
import { StatCard } from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Topbar title="Overview" />

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Active Agents" value="25" sub="All systems nominal" trend="+2" icon="🧠" />
        <StatCard label="Running Tasks" value="3" sub="2 in queue" trend="+1" icon="⚡" />
        <StatCard label="Uptime" value="99.98%" sub="Last 30 days" icon="🛡️" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft lg:col-span-2">
          <div className="text-xs uppercase tracking-wide text-neutral-textMuted">
            Activity Stream
          </div>
          <div className="mt-4 space-y-4 text-sm">
            {[
              ["✅ Azure OpenAI connected", "2m ago"],
              ["⚙️ Next.js console initialized", "12m ago"],
              ["📌 Agents synced", "1h ago"],
            ].map(([msg, time]) => (
              <div key={msg} className="flex items-center justify-between border-b border-neutral-border pb-3 last:border-none">
                <span>{msg}</span>
                <span className="text-xs text-neutral-textMuted">{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft">
          <div className="text-xs uppercase tracking-wide text-neutral-textMuted">
            Quick Actions
          </div>
          <div className="mt-4 grid gap-3">
            <button className="rounded-lg bg-brand-600 px-4 py-2 text-white text-sm shadow-soft hover:bg-brand-500">
              New Task
            </button>
            <button className="rounded-lg border border-neutral-border px-4 py-2 text-sm">
              Invite Member
            </button>
            <button className="rounded-lg border border-neutral-border px-4 py-2 text-sm">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
