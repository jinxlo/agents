import { Button } from "@/components/ui/Button";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-border pb-6">
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted font-medium mb-1">
          Console / {title}
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 bg-surface border border-border rounded-md px-3 py-1.5 focus-within:ring-1 focus-within:ring-primary transition-all">
          <span className="text-muted text-xs">⌘K</span>
          <input
            className="bg-transparent outline-none placeholder:text-muted/50 text-sm w-48 text-foreground"
            placeholder="Search..."
          />
        </div>

        <div className="h-6 w-px bg-border mx-2"></div>

        <Button variant="ghost" size="sm" className="text-xs">
          Feedback
        </Button>
        
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 border border-white/10 shadow-glow"></div>
      </div>
    </header>
  );
}
