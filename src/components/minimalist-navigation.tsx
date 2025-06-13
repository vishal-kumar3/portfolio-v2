"use client"

import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { BookOpen, User } from "lucide-react"
import Link from "next/link"

const tabs = [
  {
    key: "projects",
    label: "Projects",
    icon: (active: boolean) => (
      <span className="grid place-items-center w-5 h-5">
        <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
          <span className={`w-1.5 h-1.5 rounded-sm ${active ? "bg-foreground" : "bg-muted-foreground"}`}></span>
          <span className={`w-1.5 h-1.5 rounded-sm ${active ? "bg-foreground" : "bg-muted-foreground"}`}></span>
          <span className={`w-1.5 h-1.5 rounded-sm ${active ? "bg-foreground" : "bg-muted-foreground"}`}></span>
          <span className={`w-1.5 h-1.5 rounded-sm ${active ? "bg-foreground" : "bg-muted-foreground"}`}></span>
        </span>
      </span>
    ),
  },
  {
    key: "skills",
    label: "Skills",
    icon: (active: boolean) => (
      <span className="grid place-items-center w-5 h-5">
        <BookOpen size={16} className={active ? "text-foreground" : "text-muted-foreground"} />
      </span>
    ),
  },
  {
    key: "about",
    label: "About",
    icon: (active: boolean) => (
      <span className="grid place-items-center w-5 h-5">
        <User size={16} className={active ? "text-foreground" : "text-muted-foreground"} />
      </span>
    ),
  },
]

export default function MinimalistNavigation() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("activeTab") || "projects"

  return (
    <div className="flex justify-center px-4">
      <div className="flex items-center gap-4 bg-muted/20 p-1 backdrop-blur-sm">
        {tabs.map(tab => (
          <Tooltip key={tab.label}>
            <TooltipTrigger>
              <Link href={`?activeTab=${tab.key}`}>
                <Badge
                  key={tab.key}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${activeTab === tab.key
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground bg-transparent hover:bg-muted/90"
                    }`}
                >
                  {tab.icon(activeTab === tab.key)}
                  <span className="hidden md:inline">
                    {tab.label}
                  </span>
                </Badge>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>{tab.label}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
