export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-border py-4">
      <div>
        <div className="text-sm text-neutral-textMuted">Console</div>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="pill">Private</span>
        <span className="pill">Secure</span>
        <span className="pill">Audit</span>
      </div>
    </header>
  );
}
