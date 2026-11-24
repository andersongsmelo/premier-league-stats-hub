// Reusable footer component displayed across all pages
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-center py-6 mt-12 text-sm">
      <div className="max-w-5xl mx-auto px-4">
        <p>Premier League Stats Hub &copy; 2026 | CPAN 144 Project</p>
        <p className="text-xs mt-1 text-slate-500">
          Built with React, Next.js, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
