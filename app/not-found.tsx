import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-background">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary neon-text">404</h1>
          <h2 className="text-4xl font-bold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Button asChild size="lg" className="neon-glow">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

