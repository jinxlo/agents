import Link from "next/link";

export default function PublicHome() {
  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      <div className="container-max py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-neutral-textMuted">World App Technologies</div>
          <h1 className="text-5xl font-semibold tracking-tight mt-4">
            World App Operations Console
          </h1>
          <p className="text-neutral-textMuted mt-4 text-lg">
            A premium interface powered by OpenClaw to manage agents, tasks, and execution with clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-lg bg-brand-600 px-5 py-2.5 text-white shadow-soft hover:bg-brand-500" href="/dashboard">
              Enter Console
            </Link>
            <Link className="rounded-lg border border-neutral-border px-5 py-2.5" href="/auth/login">
              Sign in
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Agent Orchestration", "Route tasks to the right specialist in seconds."],
              ["Operational Clarity", "Live status on models, tasks, and systems."],
              ["Secure by Design", "Access controls and audit trails built in."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-neutral-border bg-neutral-surface p-5 shadow-soft">
                <div className="text-sm font-semibold">{title}</div>
                <div className="text-xs text-neutral-textMuted mt-2">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
