"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
	{
		id: "social-platform",
		title: "Social Media Platform",
		description:
			"A Twitter-like social media platform with real-time messaging, user profiles, and engagement features.",
		image: "/placeholder.svg?height=300&width=400",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example",
	},
	{
		id: "crypto-solver",
		title: "Crypto Problem Solver",
		description:
			"A decentralized platform for solving problems and earning cryptocurrency rewards.",
		image: "/placeholder.svg?height=200&width=300",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example",
	},
	{
		id: "file-manager",
		title: "File Manager",
		description: "A modern file management system with drag-and-drop functionality.",
		image: "/placeholder.svg?height=250&width=350",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example",
	},
	{
		id: "chess-game",
		title: "Chess Game",
		description: "Real-time multiplayer chess game with AI opponents.",
		image: "/placeholder.svg?height=200&width=200",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example",
	},
	{
		id: "dashboard",
		title: "Analytics Dashboard",
		description:
			"Comprehensive analytics dashboard with real-time data visualization.",
		image: "/placeholder.svg?height=180&width=280",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example",
	},
	{
		id: "banking-app",
		title: "Banking App",
		description:
			"Secure digital banking application with transaction management.",
		image: "/placeholder.svg?height=220&width=320",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example",
	},
]

export default function ProjectsGrid() {
	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
			<h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
				Projects
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
				{projects.map((project) => (
					<div key={project.id}>
						<Link href={`/project/${project.id}`}>
							<div className="bg-muted/30 rounded-xl overflow-hidden hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group backdrop-blur-sm h-full">
								<div className="relative aspect-video">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<div className="flex items-center justify-between mb-2">
										<h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
											{project.title}
										</h3>
										<div className="flex gap-2">
											<button
												onClick={(e) => {
													e.preventDefault()
													window.open(project.liveUrl, "_blank")
												}}
												className="text-muted-foreground hover:text-foreground transition-colors"
											>
												<ExternalLink size={16} />
											</button>
											<button
												onClick={(e) => {
													e.preventDefault()
													window.open(project.githubUrl, "_blank")
												}}
												className="text-muted-foreground hover:text-foreground transition-colors"
											>
												<Github size={16} />
											</button>
										</div>
									</div>
									<p className="text-muted-foreground text-sm line-clamp-3">
										{project.description}
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
