import { Topbar } from "@/components/layout/Topbar";
import { StatCard } from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Topbar title="Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active Agents" value="25" sub="All systems nominal" />
        <StatCard label="Running Tasks" value="3" sub="2 in queue" />
        <StatCard label="Uptime" value="99.98%" sub="Last 30 days" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <div className="text-sm text-neutral-textMuted">Recent Activity</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>✅ Azure OpenAI connected</li>
            <li>⚙️ Next.js console initialized</li>
            <li>📌 Agents synced</li>
          </ul>
        </div>
        <div className="card p-4">
          <div className="text-sm text-neutral-textMuted">Quick Actions</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="rounded-md bg-brand-600 px-3 py-2 text-white text-sm">New Task</button>
            <button className="rounded-md border border-neutral-border px-3 py-2 text-sm">Invite Member</button>
            <button className="rounded-md border border-neutral-border px-3 py-2 text-sm">View Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}
