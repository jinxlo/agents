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
    <aside className="h-screen w-64 bg-neutral-surface border-r border-neutral-border p-6 hidden md:flex flex-col">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-neutral-surface2 grid place-items-center">🧠</div>
        <div>
          <div className="font-semibold">World App</div>
          <div className="text-xs text-neutral-textMuted">Console</div>
        </div>
      </div>
      <nav className="mt-8 flex flex-col gap-2 text-sm">
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
      <div className="mt-auto pt-6 text-xs text-neutral-textMuted">
        Model: Azure • gpt‑5.2‑codex
      </div>
    </aside>
  );
}
