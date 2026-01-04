import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
      <div className="mx-auto max-w-6xl">
        {/* HUD Frame */}
        <div className="relative flex items-center justify-between border-b border-cyan-500/30 bg-black/40 px-8 py-4 backdrop-blur-md">
          {/* Decorative Corner Brackets */}
          <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-cyan-400" />
          <div className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-cyan-400" />

          <Link
            href="/"
            className="text-lg font-bold tracking-[0.2em] text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            SUNATH<span className="animate-pulse text-cyan-400">_</span>
          </Link>

          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/70 md:flex">
            {["About", "Education", "Projects", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="transition-all hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#00f3ff]"
              >
                {item}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="ml-4 border border-cyan-500/50 bg-cyan-500/10 px-4 py-1.5 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black"
            >
              RESUME.EXE
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}