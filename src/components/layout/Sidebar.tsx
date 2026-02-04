import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/agents", label: "Agents" },
  { href: "/tasks", label: "Tasks" },
  { href: "/logs", label: "Logs" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="h-screen w-72 bg-neutral-surface border-r border-neutral-border p-6 hidden lg:flex flex-col">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-neutral-surface2 grid place-items-center text-lg">🧠</div>
        <div>
          <div className="font-semibold tracking-wide">World App</div>
          <div className="text-xs text-neutral-textMuted">Operations Console</div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-xs uppercase tracking-widest text-neutral-textMuted mb-2">Workspace</div>
        <nav className="flex flex-col gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 hover:bg-neutral-surface2 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-8 card p-4 text-xs">
        <div className="text-neutral-textMuted">System</div>
        <div className="mt-2 flex items-center justify-between">
          <span>Status</span>
          <span className="pill">Online</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span>Model</span>
          <span className="text-neutral-textMuted">Azure • gpt‑5.2‑codex</span>
        </div>
      </div>

      <div className="mt-auto pt-6 text-xs text-neutral-textMuted">
        © {new Date().getFullYear()} World App Technologies
      </div>
    </aside>
  );
}
