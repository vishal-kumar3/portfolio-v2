export default function SkillsSection() {
  return (
    <>
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
    </>
  )
}
