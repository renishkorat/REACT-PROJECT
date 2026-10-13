// import github from '../assets/github.svg';
function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce website with a clean layout, product browsing, wishlist and shopping cart functionality.",
      image: "/projects/ecommerce.png",
      repository: "https://github.com/renishkorat",
      demo: "#",
    },
    {
      title: "Travel Planner",
      description:
        "A travel planning application to explore destinations, manage trips and save travel preferences using React.",
      image: "/projects/travel.png",
      repository: "https://github.com/renishkorat/REACT-APP/tree/main/TRAVEL",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio showcasing my skills, projects and frontend development experience.",
      image: "/projects/portfolio.png",
      repository: "https://renish-portfolio-phi-bice.vercel.app/",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#2B0A16]/30 px-6 py-20 text-white"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#9F1239]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#FB7185]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          My <span className="text-[#FB7185]">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rose-400/20 bg-[#451525]/80 p-4 transition duration-300 hover:-translate-y-2 hover:border-[#FB7185] hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]"
            >
              {/* Project Image */}
              <div className="mb-4 h-44 overflow-hidden rounded-xl bg-[#2B0A16]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Project Title */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mb-6 flex-grow text-sm leading-7 text-rose-100/80">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-auto flex flex-wrap items-center gap-3">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#FB7185]/50 px-4 py-2 text-sm font-medium text-[#FB7185] transition hover:bg-[#FB7185] hover:text-[#2B0A16]"
                >
                  Repository
                  <img src="" className='className="h-4 w-4 fill-current"' alt="" />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C026D3] to-[#FB7185] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Demo
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] text-[#9F1239]">
                    ▶
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
