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
    <div className="space-y-6">
      <Topbar title="Agents" />
      <div className="grid gap-4 md:grid-cols-3">
        {agents.map((name) => (
          <div key={name} className="card p-4">
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-neutral-textMuted mt-1">Status: Online</div>
            <button className="mt-4 rounded-md border border-neutral-border px-3 py-2 text-sm">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}
