import { Topbar } from "@/components/layout/Topbar";

export default function LogsPage() {
  return (
    <div className="space-y-8">
      <Topbar title="Logs" />
      <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft font-mono text-xs text-neutral-textMuted">
        <div>[18:12] Gateway started</div>
        <div>[18:14] Telegram updates polling</div>
        <div>[18:20] Azure OpenAI authenticated</div>
        <div>[19:00] Console scaffold created</div>
      </div>
    </div>
  );
}
