import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Hoversprite - Organic Sprayer Management System",
    description:
      "A web application for booking sprayer services that includes mapping features, allowing users to visualize and select specific farmland areas, enhancing the booking process and service allocation. Developed with Java Spring Boot for authentication, bookings, and administration management.",
    image: "/Screenshot 2025-10-02 at 7.06.17 PM.png",
    technologies: ["HTML", "Bootstrap", "JavaScript", "Java Spring Boot"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    title: "Charitan - Donation Platform",
    description:
      "An online donation website for donors to browse and donate to charitable projects, allows charities to create and manage initiatives, and provides admin with a dashboard for system operations and user management. Built with TypeScript and Tailwind CSS for a user-friendly admin interface.",
    image: "/charitan-project.png",
    technologies: ["TypeScript", "Tailwind CSS", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Selected <span className="text-primary neon-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground">Projects I'm proud of</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:neon-glow"
            >
              <div className="aspect-video overflow-hidden bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-balance group-hover:text-primary group-hover:neon-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button asChild className="neon-glow">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="glass border-primary/30 bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
