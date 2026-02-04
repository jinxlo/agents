export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-border pb-4">
      <div>
        <div className="text-sm text-neutral-textMuted">Console</div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-neutral-surface2 border border-neutral-border rounded-md px-3 py-2 text-sm">
          <span className="text-neutral-textMuted">Search</span>
          <input
            className="bg-transparent outline-none placeholder:text-neutral-textMuted text-sm"
            placeholder="Agents, tasks, projects..."
          />
        </div>
        <span className="pill">Private</span>
        <span className="pill">Secure</span>
        <div className="h-9 w-9 rounded-full bg-neutral-surface2 grid place-items-center text-sm">ML</div>
      </div>
    </header>
  );
}
