import renish from "../assets/renish.png";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-[#2B0A16] via-[#641E35] to-[#9F1239] px-6 py-16 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FB7185]/15 blur-[100px]" />
      <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#9F1239]/30 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 inline-block rounded-full border border-rose-400/20 bg-[#2B0A16]/50 px-4 py-2 text-sm text-rose-100">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-[#FB7185]">
              Renish Korat
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-[#FDA4AF] sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-rose-100">
            I'm a BSc.IT student passionate about creating modern,
            responsive and user-friendly websites using HTML5, CSS3,
            Tailwind CSS, Bootstrap and C language.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-[#FB7185] px-6 py-3 font-semibold text-[#2B0A16] transition hover:bg-[#FDA4AF]"
            >
              Download Resume ↓
            </a>

            <a
              href="#projects"
              className="rounded-full border border-rose-400/40 px-6 py-3 font-semibold text-rose-100 transition hover:bg-[#451525]"
            >
              View Projects ↗
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/renishkorat"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-rose-400/20 bg-[#451525] px-4 py-2 text-sm text-rose-100 transition hover:text-[#FB7185]"
            >
              GitHub ↗
            </a>

            <a
              href="#contact"
              className="rounded-full border border-rose-400/20 bg-[#451525] px-4 py-2 text-sm text-rose-100 transition hover:text-[#FB7185]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Profile Design */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-2 border-[#FB7185]/60 bg-[#451525] shadow-[0_0_55px_rgba(251,113,133,0.3)] sm:h-80 sm:w-80">
            <div className="absolute inset-3 rounded-full border border-dashed border-rose-400/40" />

            <img
              src={renish}
              alt="Renish Korat"
              className="h-52 w-50 rounded-full object-cover sm:h-64 sm:w-64"
            />
            <span className="absolute -right-2 top-8 rounded-full border border-rose-400/30 bg-[#2B0A16] px-3 py-2 text-xs font-bold text-[#FB7185]">
              HTML5
            </span>

            <span className="absolute -left-4 top-16 rounded-full border border-rose-400/30 bg-[#2B0A16] px-3 py-2 text-xs font-bold text-[#FB7185]">
              CSS3
            </span>

            <span className="absolute -bottom-2 right-5 rounded-full border border-rose-400/30 bg-[#2B0A16] px-3 py-2 text-xs font-bold text-[#FB7185]">
              Tailwind
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
