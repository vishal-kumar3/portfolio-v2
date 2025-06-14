import HeroSection from "@/components/hero-section"
import MinimalistNavigation from "@/components/minimalist-navigation"
import ProjectsGrid from "@/components/projects-grid"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import { Suspense } from "react"

export default async function HomePage({ searchParams }: { searchParams: Promise<{ activeTab?: string }> }) {
  const params = await searchParams
  const activeTab = params?.activeTab || "projects"

  let content = <ProjectsGrid />
  if (activeTab === "skills") content = <SkillsSection />
  if (activeTab === "about") content = <AboutSection />

  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense>
        <MinimalistNavigation />
      </Suspense>
      {content}
    </main>
  )
}
