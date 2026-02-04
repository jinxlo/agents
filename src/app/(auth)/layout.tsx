export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text flex items-center justify-center p-6">
      <div className="w-full max-w-md card p-6">
        {children}
      </div>
    </div>
  );
}
