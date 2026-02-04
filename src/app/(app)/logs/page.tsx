import { Topbar } from "@/components/layout/Topbar";

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <Topbar title="Logs" />
      <div className="card p-4 font-mono text-xs text-neutral-textMuted">
        <div>[18:12] Gateway started</div>
        <div>[18:14] Telegram updates polling</div>
        <div>[18:20] Azure OpenAI authenticated</div>
        <div>[19:00] Console scaffold created</div>
      </div>
    </div>
  );
}
