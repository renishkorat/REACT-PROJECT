function Footer() {
  return (
    <footer className="border-t border-rose-400/20 bg-[#1A0710] px-4 py-8 text-white sm:px-6 sm:py-10">

      <div className="mx-auto max-w-6xl">

        {/* Footer Main */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          {/* Logo and Description */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide text-[#FB7185]"
            >
              Portfolio <span className="text-rose-100">.</span>
            </a>

            <p className="mt-2 text-sm text-rose-100/70">
              Designing modern experiences for the web.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm sm:gap-7">
            <a href="#home" className="text-rose-100 transition hover:text-[#FB7185]">
              Home
            </a>
            <a href="#about" className="text-rose-100 transition hover:text-[#FB7185]">
              About
            </a>
            <a href="#projects" className="text-rose-100 transition hover:text-[#FB7185]">
              Projects
            </a>
            <a href="#contact" className="text-rose-100 transition hover:text-[#FB7185]">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/renishkorat"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/20 bg-[#451525] text-sm font-bold text-rose-100 transition hover:border-[#FB7185] hover:text-[#FB7185]"
            >
              GH
            </a>

            <a
              href="https://www.instagram.com/renish___korat__307/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/20 bg-[#451525] text-sm font-bold text-rose-100 transition hover:border-[#FB7185] hover:text-[#FB7185]"
            >
              IG
            </a>

            <a
              href="mailto:koratrenish350@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/20 bg-[#451525] text-sm text-rose-100 transition hover:border-[#FB7185] hover:text-[#FB7185]"
            >
              ✉
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="my-7 border-t border-rose-400/15" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-rose-100/60 sm:text-sm md:flex-row">

          <p>
            © {new Date().getFullYear()} Renish Korat. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-[#FB7185]"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;