"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Overview", icon: "⦿" },
  { href: "/projects", label: "Projects", icon: "◈" },
  { href: "/agents", label: "Agents", icon: "⍟" },
  { href: "/tasks", label: "Tasks", icon: "⚡" },
  { href: "/logs", label: "Logs", icon: "≡" },
  { href: "/settings", label: "Settings", icon: "⚙" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-72 bg-background border-r border-border px-4 py-6 hidden lg:flex flex-col">
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="h-8 w-8 rounded-md bg-primary/20 text-primary grid place-items-center text-sm font-bold shadow-glow">
          W
        </div>
        <div>
          <div className="font-semibold text-sm tracking-tight">World App</div>
          <div className="text-[10px] text-muted uppercase tracking-wider">Console</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1 text-sm">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200 group ${
                active
                  ? "bg-surfaceHighlight text-foreground shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-surfaceHighlight/50"
              }`}
            >
              <span className={`text-xs ${active ? "text-primary" : "text-subtle group-hover:text-muted"}`}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-2">
        <div className="rounded-md border border-border bg-surface/50 p-3 text-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted">System</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-success font-medium">Online</span>
            </div>
          </div>
          <div className="text-muted truncate">Azure • gpt‑5.2‑codex</div>
        </div>
      </div>
    </aside>
  );
}
