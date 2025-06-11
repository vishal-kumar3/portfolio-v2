export default function SkillsSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Docker",
          "GraphQL",
          "Redis",
          "Kubernetes",
          "Express",
          "FastAPI",
          "Tailwind CSS",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-muted/30 rounded-lg p-3 sm:p-4 text-center hover:bg-muted/50 transition-colors backdrop-blur-sm"
          >
            <span className="text-foreground text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
