import Skills from './Skills';

function About() {
  const services = [
    {
      icon: "⌘",
      title: "Frontend Development",
      description:
        "I create modern, responsive and user-friendly websites using HTML5, CSS3 and Tailwind CSS.",
    },
    {
      icon: "⚛",
      title: "React Development",
      description:
        "I build interactive web applications using React components, props, state and hooks.",
    },
    {
      icon: "💡",
      title: "Problem Solving",
      description:
        "I enjoy solving coding problems, learning new technologies and improving my development skills.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#2B0A16]/30 px-6 py-16 text-white md:py-20"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#9F1239]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* About Heading */}
        <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">
          About <span className="text-[#FB7185]">Me</span>
        </h2>

        {/* About Content */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-4 text-2xl font-bold text-[#FB7185] md:text-3xl">
            I'm Renish Korat
          </h3>

          <p className="mb-4 leading-7 text-rose-100">
            I'm a BSc.IT student passionate about frontend development
            and creating modern, responsive websites.
          </p>

          <p className="leading-7 text-rose-100">
            I work with HTML5, CSS3, Tailwind CSS and Bootstrap
            to build user-friendly web experiences.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex min-h-64 flex-col items-center justify-center rounded-2xl border border-rose-400/20 bg-[#451525] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#FB7185] hover:bg-[#641E35] hover:shadow-[0_0_25px_rgba(251,113,133,0.15)]"
            >
              {/* Icon */}
              <span className="mb-4 text-5xl text-[#FB7185] transition duration-300 group-hover:scale-110">
                {service.icon}
              </span>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-rose-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
      <Skills />
    </section>

    
  );
}

export default About;
