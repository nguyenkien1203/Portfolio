import { Code2, Palette, Zap, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-32 px-8 relative bg-secondary/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary neon-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a full-stack developer passionate about building scalable applications with clean architecture and
            robust engineering. I enjoy working in teams and solving problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Code2,
              title: "Clean Code",
              description: "Writing maintainable, scalable code that follows best practices",
            },
            {
              icon: Palette,
              title: "Design Focus",
              description: "Creating beautiful interfaces with attention to every detail",
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Building fast, optimized experiences for all users",
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "Working effectively with teams to deliver great products",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow group"
            >
              <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:neon-glow transition-all">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m currently a final-year{" "}
                <span className="text-primary font-semibold">Software Engineering student at RMIT University</span>, seeking
                opportunities to apply my skills to real-world projects. I&apos;m eager to contribute to an innovative capstone
                project and deliver high-quality software solutions.
              </p>
              <p>
                Throughout my studies, I&apos;ve worked on various projects involving full-stack development, building web
                applications with modern technologies like React, Spring Boot, and databases. I&apos;m excited to bring my
                technical skills and collaborative mindset to a professional team environment.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m usually climbing, reading, hanging out with my family, or exploring new coffee
                shops around the city searching for the perfect espresso.
              </p>
            </div>
          </div>

          <div className="space-y-6 glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "Java",
                "Python",
                "C",
                "C++",
                "React",
                "Next.js",
                "TailwindCSS",
                "MongoDB",
                "ExpressJS",
                "Spring Boot",
                "Docker",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="glass border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold hover:neon-glow transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
