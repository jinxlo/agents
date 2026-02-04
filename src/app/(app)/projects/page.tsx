import { Topbar } from "@/components/layout/Topbar";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <Topbar title="Projects" />
      <div className="rounded-xl border border-neutral-border bg-neutral-surface p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-textMuted">Active Projects</div>
            <div className="text-lg font-semibold mt-1">World App Portfolio</div>
          </div>
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-white text-sm shadow-soft hover:bg-brand-500">Create Project</button>
        </div>
        <div className="mt-6 overflow-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-textMuted">
              <tr>
                <th className="py-2">Name</th>
                <th>Status</th>
                <th>Last Deploy</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-border">
                <td className="py-3 font-medium">World App Console</td>
                <td><span className="pill">Active</span></td>
                <td>Just now</td>
                <td>Geoffry</td>
              </tr>
              <tr className="border-t border-neutral-border">
                <td className="py-3 font-medium">Agent Platform</td>
                <td><span className="pill">Planning</span></td>
                <td>—</td>
                <td>Adrian Cross</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
