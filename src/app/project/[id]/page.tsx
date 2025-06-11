"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

const getProject = (id: string) => {
  const projects = {
    "social-platform": {
      title: "Social Media Platform",
      description:
        "A comprehensive social media platform built with modern web technologies. Features include real-time messaging, user profiles, post engagement, and advanced privacy controls. The platform is designed to handle millions of users with a scalable architecture using React, Node.js, and PostgreSQL.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      author: "Vishal Kumar",
      credentials: "Full-Stack Developer",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  }

  return projects[id as keyof typeof projects] || projects["social-platform"]
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{project.title}</h1>

        {/* Image Carousel */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8 bg-muted">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {project.images.map((image, index) => (
              <div key={index} className="min-w-full relative">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? "bg-primary-foreground" : "bg-primary-foreground/50"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Author and Links */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{project.author}</h3>
              <p className="text-muted-foreground">{project.credentials}</p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-border text-foreground hover:bg-accent">
                <Link href={project.githubUrl} target="_blank">
                  <Github size={16} className="mr-2" />
                  Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground py-8 border-t border-border">
          <p>&copy; 2024 Vishal Kumar. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
