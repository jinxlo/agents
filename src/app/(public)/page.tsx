import Link from "next/link";

export default function PublicHome() {
  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      <div className="container-max py-20">
        <div className="max-w-2xl">
          <div className="text-sm text-neutral-textMuted">World App Technologies</div>
          <h1 className="text-4xl font-semibold mt-3">Professional Console for AI Operations</h1>
          <p className="text-neutral-textMuted mt-4">
            A premium interface powered by OpenClaw to manage agents, tasks, and execution in one place.
          </p>
          <div className="mt-8 flex gap-3">
            <Link className="rounded-md bg-brand-600 px-4 py-2 text-white" href="/dashboard">Go to Console</Link>
            <Link className="rounded-md border border-neutral-border px-4 py-2" href="/auth/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
