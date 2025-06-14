import Link from 'next/link'
import { TooltipProvider } from '@/components/tooltip-provider'
import { dataLinks } from '@/data/socials'

export default function Footer() {
  return (
    <footer className="dark:text-card text-foreground p-4 mt-4">
      <hr className='border-foreground ' />
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 px-4 py-2 md:flex-row justify-between items-center">
          <div className="flex gap-5">
            {
              dataLinks.map((link) => (
                <TooltipProvider key={link.id} tooltip={link.tip}>
                  <Link
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text text-foreground transition-colors"
                  >
                    {link.icon({ size: 24, className: "w-[40px] h-[40px] p-2 rounded-md hover:bg-card-hover hover:text-card-hover-foreground" })}
                  </Link>
                </TooltipProvider>
              ))
            }
          </div>
          <div className="flex gap-4 text-md text-foreground">
            <div>
              What's sleep? Asking for a friend.
            </div>
            <Link href="/">
              V2
            </Link>
            <Link href="v1.vishalkumar.space">
              V1
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
