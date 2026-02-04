"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/agents", label: "Agents" },
  { href: "/tasks", label: "Tasks" },
  { href: "/logs", label: "Logs" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-72 bg-neutral-surface border-r border-neutral-border px-6 py-8 hidden lg:flex flex-col">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 grid place-items-center text-white text-lg">
          🧠
        </div>
        <div>
          <div className="font-semibold tracking-wide">World App</div>
          <div className="text-xs text-neutral-textMuted">Operations Console</div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-xs uppercase tracking-widest text-neutral-textMuted mb-3">
          Workspace
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 transition ${
                  active
                    ? "bg-brand-600/10 text-brand-600 font-medium"
                    : "hover:bg-neutral-surface2"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-10 rounded-xl border border-neutral-border bg-neutral-surface2 p-4 text-xs">
        <div className="text-neutral-textMuted">System</div>
        <div className="mt-3 flex items-center justify-between">
          <span>Status</span>
          <span className="rounded-full bg-success/10 px-2 py-0.5 text-success text-[11px]">
            Online
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span>Model</span>
          <span className="text-neutral-textMuted">Azure • gpt‑5.2‑codex</span>
        </div>
      </div>

      <div className="mt-auto pt-8 text-xs text-neutral-textMuted">
        © {new Date().getFullYear()} World App Technologies
      </div>
    </aside>
  );
}
