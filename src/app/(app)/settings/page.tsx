import { Topbar } from "@/components/layout/Topbar";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <Topbar title="Settings" />
      <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft space-y-6">
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-textMuted">Organization</div>
          <div className="mt-2 text-lg font-semibold">World App Technologies</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-textMuted">Security</div>
          <div className="mt-2">2FA: Enabled</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-textMuted">API Keys</div>
          <button className="mt-3 rounded-lg border border-neutral-border px-4 py-2 text-sm">Generate Key</button>
        </div>
      </div>
    </div>
  );
}
