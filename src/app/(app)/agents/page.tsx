import { Topbar } from "@/components/layout/Topbar";

const agents = [
  "Geoffry",
  "Adrian Cross",
  "Elena Ruiz",
  "Sofia Patel",
  "Victor Hale",
  "Dr. Elias Brooks",
  "Hannah Vale",
];

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <Topbar title="Agents" />
      <div className="grid gap-6 md:grid-cols-3">
        {agents.map((name) => (
          <div key={name} className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{name}</div>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-success text-[11px]">Online</span>
            </div>
            <div className="text-xs text-neutral-textMuted mt-2">Role active • Ready for tasks</div>
            <button className="mt-4 rounded-lg border border-neutral-border px-4 py-2 text-sm">Open Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
