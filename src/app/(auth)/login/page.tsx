export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <p className="text-sm text-neutral-textMuted mt-2">Access the World App console.</p>
      <form className="mt-6 grid gap-3">
        <input className="rounded-md bg-neutral-surface2 border border-neutral-border px-3 py-2" placeholder="Email" />
        <input type="password" className="rounded-md bg-neutral-surface2 border border-neutral-border px-3 py-2" placeholder="Password" />
        <button className="rounded-md bg-brand-600 px-4 py-2 text-white">Sign in</button>
      </form>
    </div>
  );
}
