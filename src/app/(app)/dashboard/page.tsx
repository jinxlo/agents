import { Topbar } from "@/components/layout/Topbar";
import { StatCard } from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Topbar title="Overview" />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active Agents" value="25" sub="All systems nominal" trend="+2" />
        <StatCard label="Running Tasks" value="3" sub="2 in queue" trend="+1" />
        <StatCard label="Uptime" value="99.98%" sub="Last 30 days" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card p-4 lg:col-span-2">
          <div className="text-sm text-neutral-textMuted">Activity Stream</div>
          <div className="mt-3 space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-neutral-border pb-2">
              <span>✅ Azure OpenAI connected</span>
              <span className="text-xs text-neutral-textMuted">2m ago</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-border pb-2">
              <span>⚙️ Next.js console initialized</span>
              <span className="text-xs text-neutral-textMuted">12m ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span>📌 Agents synced</span>
              <span className="text-xs text-neutral-textMuted">1h ago</span>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="text-sm text-neutral-textMuted">Quick Actions</div>
          <div className="mt-4 grid gap-2">
            <button className="rounded-md bg-brand-600 px-3 py-2 text-white text-sm">New Task</button>
            <button className="rounded-md border border-neutral-border px-3 py-2 text-sm">Invite Member</button>
            <button className="rounded-md border border-neutral-border px-3 py-2 text-sm">View Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}
