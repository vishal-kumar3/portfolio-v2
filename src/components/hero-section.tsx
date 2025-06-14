import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="text-foreground relative">
      {/* Header */}
      {/* <header className="flex justify-between items-center px-4 sm:px-8 py-6">
        <div className="text-foreground text-lg font-medium">vishalkumar.space</div>
        <Button
          variant="outline"
          className="bg-primary-foreground text-primary border-border hover:bg-accent rounded-full px-4 sm:px-6 py-1 sm:py-2 font-medium text-sm"
        >
          Resume
        </Button>
      </header> */}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-8 py-8 md:py-12 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 md:mr-8 mb-6 md:mb-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <Image
              src="/images/profile/VishalKumar.jpg?height=128&width=128"
              alt="Vishal Kumar"
              width={1080}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Vishal Kumar</h1>

          {/* Email */}
          <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">kumarvishal823003@gmail.com</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-6">
            <Link href="https://github.com" className="text-foreground hover:text-muted-foreground transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://twitter.com" className="text-foreground hover:text-muted-foreground transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="https://linkedin.com" className="text-foreground hover:text-muted-foreground transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-6 mb-4 md:mb-6">
            <div className="text-foreground">
              <span className="font-bold">11</span> Projects
            </div>
            <div className="text-foreground">
              <span className="font-bold">15</span> Skills
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
            I'm a developer with expertise in web development and a strong focus on creating scalable backends and
            backend heavy full-stack projects. I love to build.
          </p>
        </div>
      </div>
    </div>
  )
}
