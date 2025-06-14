
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCarousel } from "@/components/project/project-carousel"
import { getReadmeFileOfRepo, getRepoByName } from "@/data/get-repo"
import { markdownToHtml } from "@/lib/markdown"
import { CopyButton } from "@/components/copy-button"
import { TooltipProvider } from "@/components/tooltip-provider"


export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const param = await params;

  const { data: project, error } = await getRepoByName(param.id)
  const { data: readmeData, error: readmeError } = await getReadmeFileOfRepo(param.id)

  if (error || readmeError || !project || !readmeData) {
    return <div className="text-red-500">Error loading project</div>
  }

  let renderedReadmeHtml = '';
  if (readmeData) {
    renderedReadmeHtml = await markdownToHtml(readmeData);
  }


  return (
    <main className="min-h-screen max-w-5xl mx-auto text-foreground">
      <div className="max-w-3xl mx-auto">
        <ProjectCarousel />
      </div>
      <div className="relative gap-4 px-6 pt-6">
      </div>

      {renderedReadmeHtml ? (
        <div className="relative prose prose-invert lg:prose-base max-w-4xl mx-auto text-foreground">
          <ActionButtons project={project} />
          <div dangerouslySetInnerHTML={{ __html: renderedReadmeHtml }} />
        </div>
      ) : (
        <p className="text-gray-500">No README.md found for this repository.</p>
      )}
    </main >
  )
}

const ActionButtons = ({ project }: { project: repoType }) => {


  return (
    <div className="absolute top-2 right-0 space-x-4 animate-bounce">
      {
        project.homepage && (
          <TooltipProvider tooltip="Live Demo">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href={project.homepage} target="_blank">
                <ExternalLink size={16} />
              </Link>
            </Button>
          </TooltipProvider>
        )
      }
      <TooltipProvider tooltip="View on GitHub">
        <Button variant="outline" asChild className="border-border text-foreground hover:bg-accent">
          <Link href={project.html_url} target="_blank">
            <Github size={16} />
          </Link>
        </Button>
      </TooltipProvider>
      <CopyButton text={project.clone_url} tooltip="Clone Repo" />
    </div>
  )
}
