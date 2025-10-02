import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="glass neon-glow text-primary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                  <Sparkles className="h-4 w-4" />
                  Open to internship opportunities
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold text-balance leading-tight">
                Full-Stack
                <br />
                <span className="text-primary neon-text">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                I'm Vo Nguyen Kien, a motivated final-year Software Engineering student with experience in building scalable
                applications using React, Node.js, PostgreSQL, and MongoDB.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="neon-glow">
                <a href="#projects" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass border-primary/30 bg-transparent">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                <a href="https://github.com/nguyenkien1203" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                <a href="https://www.linkedin.com/in/kien-nguyen" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                <a href="mailto:s3938016@rmit.edu.vn">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative aspect-square max-w-xs lg:max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-3xl rotate-6 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 to-primary/20 rounded-3xl -rotate-6 blur-xl"></div>
              <div className="relative glass rounded-3xl overflow-hidden shadow-2xl neon-glow border border-primary/30">
                <img
                  src="/image.png"
                  alt="Vo Nguyen Kien"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
