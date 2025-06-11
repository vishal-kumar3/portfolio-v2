"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import MinimalistNavigation from "@/components/minimalist-navigation"
import ProjectsGrid from "@/components/projects-grid"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("about")

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <ProjectsGrid />
      case "skills":
        return <SkillsSection />
      case "about":
        return <AboutSection />
      default:
        return <ProjectsGrid />
    }
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <MinimalistNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </main>
  )
}
