import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-white"
          >
            Sunath<span className="text-violet-400">.</span>
          </Link>

                        <nav className="flex items-center gap-6 text-sm text-gray-300">
                <Link href="#about" className="hover:text-white transition">
                    About
                </Link>
                <Link href="#education" className="hover:text-white transition">
                    Education
                </Link>
                <Link href="#projects" className="hover:text-white transition">
                    Projects
                </Link>
                <Link href="#contact" className="hover:text-white transition">
                    Contact
                </Link>

                <a
                    href="/resume.pdf"
                    className="rounded-lg border border-white/20 px-3 py-1 text-white hover:bg-white/10 transition"
                >
                    Resume
                </a>
                </nav>

        </div>
      </div>
    </header>
  );
}
