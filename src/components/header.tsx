"use client"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 py-6">
      <div className="text-foreground text-lg font-medium">vishalkumar.space</div>
      <button className="bg-primary-foreground text-primary border-border hover:bg-accent rounded-full px-4 sm:px-6 py-1 sm:py-2 font-medium text-sm">
        Resume
      </button>
    </header>
  )
}
