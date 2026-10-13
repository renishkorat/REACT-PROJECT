import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  const navClass = (name) =>
    `block rounded-xl px-4 py-2.5 font-semibold transition-all duration-300 ${
      activeLink === name
        ? "bg-gradient-to-r from-[#FB7185] to-[#FDA4AF] text-[#2B0A16] shadow-lg shadow-rose-500/30 ring-1 ring-rose-200/30"
        : "text-rose-100 hover:bg-[#451525] hover:text-[#FB7185]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-400/20 bg-[#2B0A16]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="shrink-0 text-xl font-bold tracking-wide text-[#FB7185] sm:text-2xl"
        >
          Portfolio <span className="text-rose-100">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex lg:gap-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={navClass(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hire Me Button - Desktop */}
        <a
          href="#contact"
          onClick={() => handleNavClick("Contact")}
          className="hidden shrink-0 rounded-full bg-[#FB7185] px-5 py-2.5 font-semibold text-[#2B0A16] shadow-md shadow-rose-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#FDA4AF] md:inline-flex"
        >
          Hire Me ↗
        </a>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/30 text-2xl text-[#FB7185] transition hover:bg-[#451525] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-rose-400/20 bg-[#2B0A16] px-4 py-4 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className={navClass(item.name)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => handleNavClick("Contact")}
              className="mt-2 rounded-xl bg-gradient-to-r from-[#FB7185] to-[#FDA4AF] px-4 py-3 text-center font-bold text-[#2B0A16] shadow-lg shadow-rose-500/20 transition hover:brightness-110"
            >
              Hire Me ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;