import { GraduationCap } from "lucide-react"

const experiences = [
  {
    period: "Feb 2022 — Present",
    title: "Bachelor of Engineering (Software Engineering) (Honours)",
    company: "RMIT University",
    description:
      "Currently pursuing a Bachelor's degree in Software Engineering with a GPA of 3.3/4.0. Relevant coursework includes Web Programming, Enterprise Application Development, and Software Engineering: Architecture and Design. Actively involved in developing full-stack applications and working on collaborative projects.",
    technologies: ["Java", "JavaScript", "TypeScript", "React", "Spring Boot", "MongoDB"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-primary neon-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">My academic journey</p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block opacity-50"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative lg:pl-12">
              <div className="absolute left-0 top-8 w-3 h-3 bg-primary rounded-full -translate-x-[5px] hidden lg:block neon-glow"></div>

              <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-balance">{exp.title}</h3>
                    <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
