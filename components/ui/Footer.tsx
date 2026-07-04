export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-white/20">
          © {new Date().getFullYear()} Aziz Ltaief
        </span>
        <span className="text-xs text-white/20">
          Built with Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}