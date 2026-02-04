import { Topbar } from "@/components/layout/Topbar";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <Topbar title="Projects" />
      <div className="card p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-textMuted">Active Projects</div>
          <button className="rounded-md bg-brand-600 px-3 py-2 text-white text-sm">Create Project</button>
        </div>
        <div className="mt-4 overflow-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-textMuted">
              <tr>
                <th className="py-2">Name</th>
                <th>Status</th>
                <th>Last Deploy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-border">
                <td className="py-3">World App Console</td>
                <td><span className="pill">Active</span></td>
                <td>Just now</td>
              </tr>
              <tr className="border-t border-neutral-border">
                <td className="py-3">Agent Platform</td>
                <td><span className="pill">Planning</span></td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
