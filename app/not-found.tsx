import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <p className="font-mono text-sm text-cyan-400 mb-3">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          This page <span className="gradient-text">doesn&apos;t exist</span>
        </h1>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The link may be broken or the page may have moved. Here are a few good places to go instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary py-3 px-6 text-sm rounded-xl">
            Back to home
          </Link>
          <Link href="/#projects" className="btn-secondary py-3 px-6 text-sm rounded-xl">
            See my projects
          </Link>
        </div>
      </div>
    </main>
  );
}
