import { Topbar } from "@/components/layout/Topbar";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Topbar title="Settings" />
      <div className="card p-4 space-y-4">
        <div>
          <div className="text-sm text-neutral-textMuted">Organization</div>
          <div className="mt-2">World App Technologies</div>
        </div>
        <div>
          <div className="text-sm text-neutral-textMuted">Security</div>
          <div className="mt-2">2FA: Enabled</div>
        </div>
        <div>
          <div className="text-sm text-neutral-textMuted">API Keys</div>
          <button className="mt-2 rounded-md border border-neutral-border px-3 py-2 text-sm">Generate Key</button>
        </div>
      </div>
    </div>
  );
}
