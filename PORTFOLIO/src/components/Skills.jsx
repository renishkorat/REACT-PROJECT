function Skills(){
    const skills = [
        {name: "C Language",percentages:70},
        {name: "HTML5",percentages:95},
        {name: "CSS3",percentages:70},
        {name: "Tailwind CSS",percentages:70},
        {name: "Bootstrap",percentages:70},
        {name: "React js",percentages:70},
    ];
    return(
         <section
      id=""
      className="relative overflow-hidden bg-gradient-to-br from-[#2B0A16] via-[#641E35] to-[#9F1239] px-6 py-20 text-white mt-8 rounded-lg"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#FB7185]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
          My <span className="text-[#FB7185]">Skills</span>
        </h2>

        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              {/* Skill Name */}
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="font-medium text-rose-100">
                  {skill.name}
                </span>

                <span className="font-semibold text-[#FB7185]">
                  {skill.percentages}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 overflow-hidden rounded-full bg-[#2B0A16]/80">
                <div
                  className="h-full rounded-full bg-[#FB7185] shadow-[0_0_12px_rgba(251,113,133,0.45)] transition-all duration-700"
                  style={{ width: `${skill.percentages}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default Skills