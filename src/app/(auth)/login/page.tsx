export default function LoginPage() {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-neutral-textMuted">Secure Access</div>
      <h1 className="text-3xl font-semibold mt-2">Sign in</h1>
      <p className="text-sm text-neutral-textMuted mt-2">Access the World App operations console.</p>
      <form className="mt-6 grid gap-4">
        <input className="rounded-lg bg-neutral-surface2 border border-neutral-border px-4 py-2.5" placeholder="Email" />
        <input type="password" className="rounded-lg bg-neutral-surface2 border border-neutral-border px-4 py-2.5" placeholder="Password" />
        <button className="rounded-lg bg-brand-600 px-4 py-2.5 text-white shadow-soft hover:bg-brand-500">Sign in</button>
      </form>
      <div className="text-xs text-neutral-textMuted mt-4">By signing in, you agree to security protocols.</div>
    </div>
  );
}
