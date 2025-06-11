"use client"

import { BookOpen, User } from "lucide-react"

interface MinimalistNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function MinimalistNavigation({ activeTab, onTabChange }: MinimalistNavigationProps) {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="flex items-center gap-4 md:gap-6">
        <button
          onClick={() => onTabChange("projects")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "projects" ? "bg-primary-foreground text-primary" : "text-muted-foreground hover:text-foreground bg-muted/30"
          }`}
        >
          <span className="grid place-items-center w-5 h-5">
            <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
              <span
                className={`w-1.5 h-1.5 rounded-sm ${activeTab === "projects" ? "bg-primary" : "bg-muted-foreground"}`}
              ></span>
              <span
                className={`w-1.5 h-1.5 rounded-sm ${activeTab === "projects" ? "bg-primary" : "bg-muted-foreground"}`}
              ></span>
              <span
                className={`w-1.5 h-1.5 rounded-sm ${activeTab === "projects" ? "bg-primary" : "bg-muted-foreground"}`}
              ></span>
              <span
                className={`w-1.5 h-1.5 rounded-sm ${activeTab === "projects" ? "bg-primary" : "bg-muted-foreground"}`}
              ></span>
            </span>
          </span>
          Projects
        </button>

        <button
          onClick={() => onTabChange("skills")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "skills" ? "bg-primary-foreground text-primary" : "text-muted-foreground hover:text-foreground bg-muted/30"
          }`}
        >
          <span className="grid place-items-center w-5 h-5">
            <BookOpen size={16} className={activeTab === "skills" ? "text-primary" : "text-muted-foreground"} />
          </span>
          Skills
        </button>

        <button
          onClick={() => onTabChange("about")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeTab === "about" ? "bg-primary-foreground text-primary" : "text-muted-foreground hover:text-foreground bg-muted/30"
          }`}
        >
          <span className="grid place-items-center w-5 h-5">
            <User size={16} className={activeTab === "about" ? "text-primary" : "text-muted-foreground"} />
          </span>
          About
        </button>
      </div>
    </div>
  )
}
