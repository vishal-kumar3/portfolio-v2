import Image from "next/image"
import Link from "next/link"
import { ExternalLink, GitFork, Github } from "lucide-react"
import { getGithubRepos } from "@/data/get-repo"
import { cn } from "@/lib/utils"


export default async function ProjectsGrid() {
  const { data, error } = await getGithubRepos([
    "interview-ai",
    "Devcord",
    "WriteFlow",
  ])

  if (error || !data) {
    return <div className="text-red-500">Error loading projects</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-4 transition-all duration-300 ease-in-out">
      {data.map((project) => (
        <div
          key={project.id}
          className={cn(
            "bg-muted/30 rounded-lg overflow-hidden hover:bg-muted/50 transition-all duration-300 cursor-pointer group backdrop-blur-sm",
          )}
        >
          <Link href={`/project/${project.name}`} className="block">
            <div className="relative aspect-video">
              <Image
                src={project.openGraphImageUrl || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover w-full h-full grayscale-100 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <Link
                href={`/project/${project.name}`}
                className="font-semibold text-sm text-foreground hover:underline"
              >
                {project.name}
              </Link>
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <div className="grayscale-100 group-hover:grayscale-0 transition-all duration-300">
                    ⭐
                  </div>
                  {project.stargazerCount}
                </div>
                {
                  project.forkCount > 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <GitFork size={13} className="text-muted-foreground" />
                      {project.forkCount}
                    </div>
                  )
                }
                {project.homepageUrl && (
                  <Link
                    href={project.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </Link>
                )}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                </Link>
              </div>
            </div>
            <Link
              href={`/project/${project.name}`}
              className="text-muted-foreground text-xs line-clamp-2"
            >
              {project.description}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
