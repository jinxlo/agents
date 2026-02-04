import { Topbar } from "@/components/layout/Topbar";

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <Topbar title="Tasks" />
      <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft">
        <div className="text-xs uppercase tracking-wide text-neutral-textMuted">Queue</div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between border-b border-neutral-border pb-3">
            <span>✅ Setup Azure OpenAI</span>
            <span className="text-xs text-neutral-textMuted">Completed</span>
          </div>
          <div className="flex items-center justify-between border-b border-neutral-border pb-3">
            <span>⚙️ Build Next.js console</span>
            <span className="text-xs text-neutral-textMuted">In progress</span>
          </div>
          <div className="flex items-center justify-between">
            <span>📌 Draft GTM plan</span>
            <span className="text-xs text-neutral-textMuted">Queued</span>
          </div>
        </div>
      </div>
    </div>
  );
}
