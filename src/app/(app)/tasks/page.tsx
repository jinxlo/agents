import { Topbar } from "@/components/layout/Topbar";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <Topbar title="Tasks" />
      <div className="card p-4">
        <div className="text-sm text-neutral-textMuted">Task Queue</div>
        <ul className="mt-3 space-y-2 text-sm">
          <li>✅ Setup Azure OpenAI</li>
          <li>⚙️ Build Next.js console</li>
          <li>📌 Draft GTM plan</li>
        </ul>
      </div>
    </div>
  );
}
