import ProjectCard from "./project-card"

const projects = [
  {
    id: "social-platform",
    title: "Social Media Platform",
    description:
      "A Twitter-like social media platform with real-time messaging, user profiles, and engagement features. Built with modern web technologies for scalable performance.",
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "crypto-solver",
    title: "Crypto Problem Solver",
    description:
      "A decentralized platform for solving problems and earning cryptocurrency rewards. Features AI-curated challenges and blockchain integration.",
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "file-manager",
    title: "Cloud File Manager",
    description:
      "A modern file management system with drag-and-drop functionality, real-time collaboration, and secure cloud storage integration.",
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "chess-game",
    title: "Multiplayer Chess",
    description:
      "Real-time multiplayer chess game with AI opponents, tournament modes, and comprehensive game analysis features.",
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "dashboard-app",
    title: "Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts for business intelligence.",
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "banking-app",
    title: "Digital Banking",
    description:
      "Secure digital banking application with transaction management, budget tracking, and financial planning tools.",
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
