import Link from "next/link";

// Reusable navigation bar linking the primary routes of the application
export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-purple-400"
        >
          Premier League Stats Hub
        </Link>

        {/* Navigation links across the 3 required pages */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-300 transition-colors">
            Standings
          </Link>
          <Link
            href="/teams/arsenal"
            className="hover:text-purple-300 transition-colors"
          >
            Featured Club
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-300 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
