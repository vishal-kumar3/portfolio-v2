
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {

  return (
    <header className="flex justify-between items-center px-4 sm:px-8 py-6">
      <Link href="/" className="text-foreground text-lg font-medium">vishalkumar.space</Link>
      <Button
        variant="outline"
        className="bg-primary-foreground text-primary border-border hover:bg-accent rounded-full px-4 sm:px-6 py-1 sm:py-2 font-medium text-sm"
      >
        Resume
      </Button>
    </header>
  )
}
