import { Topbar } from "@/components/layout/Topbar";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <Topbar title="Overview" />

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Active Agents" value="25" sub="All systems nominal" trend="+2" icon="🧠" />
        <StatCard label="Running Tasks" value="3" sub="2 in queue" trend="+1" icon="⚡" />
        <StatCard label="Uptime" value="99.98%" sub="Last 30 days" icon="🛡️" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Activity Stream" subtitle="Real-time events from your agent fleet" />
          <div className="mt-4 space-y-4">
            {[
              ["✅ Azure OpenAI connected", "2m ago"],
              ["⚙️ Next.js console initialized", "12m ago"],
              ["📌 Agents synced", "1h ago"],
            ].map(([msg, time], i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-none hover:bg-surfaceHighlight/50 p-2 rounded transition-colors cursor-default">
                <span className="text-sm font-medium">{msg}</span>
                <span className="text-xs text-muted font-mono">{time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Quick Actions" />
          <div className="grid gap-3">
            <Button variant="primary" className="w-full justify-start">
              <span className="mr-2">+</span> New Task
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <span className="mr-2">👤</span> Invite Member
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted hover:text-foreground">
              <span className="mr-2">📄</span> View Logs
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
