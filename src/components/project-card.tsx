"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ id, title, description, image, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <div className="glass-effect rounded-xl overflow-hidden hover-glow group cursor-pointer transition-all duration-300 hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex gap-2">
              {liveUrl && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-primary/20"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(liveUrl, "_blank")
                  }}
                >
                  <ExternalLink size={16} />
                </Button>
              )}
              {githubUrl && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:bg-primary/20"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(githubUrl, "_blank")
                  }}
                >
                  <Github size={16} />
                </Button>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  )
}
