export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-border pb-6">
      <div>
        <div className="text-xs uppercase tracking-wide text-neutral-textMuted">
          Console
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-neutral-surface2 border border-neutral-border rounded-xl px-3 py-2 text-sm">
          <span className="text-neutral-textMuted">⌘</span>
          <input
            className="bg-transparent outline-none placeholder:text-neutral-textMuted text-sm"
            placeholder="Search agents, tasks..."
          />
        </div>

        <span className="rounded-full border border-neutral-border px-3 py-1 text-xs text-neutral-textMuted">
          Private
        </span>
        <span className="rounded-full border border-neutral-border px-3 py-1 text-xs text-neutral-textMuted">
          Secure
        </span>

        <div className="h-9 w-9 rounded-full bg-neutral-surface2 grid place-items-center text-sm font-medium">
          ML
        </div>
      </div>
    </header>
  );
}
