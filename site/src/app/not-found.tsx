import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md terminal-panel p-10">
        <p className="terminal-label mb-3">System Error</p>
        <h1 className="text-6xl font-bold text-emerald-100 mb-4">404</h1>
        <p className="text-xl text-emerald-100/70 mb-8 font-mono">[warn] page not found</p>
        <Link
          href="/"
          className="inline-block terminal-button font-mono uppercase tracking-[0.12em]"
        >
          $ back_to_home
        </Link>
      </div>
    </main>
  );
}
