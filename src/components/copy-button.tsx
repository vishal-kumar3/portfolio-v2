"use client"

import { TooltipProvider } from "@/components/tooltip-provider"
import { Button } from "@/components/ui/button"
import { copyToClipboard } from "@/util/clipboard"
import { Check, Copy } from "lucide-react"
import { useState } from "react"


export const CopyButton = ({ text, tooltip }: { text: string, tooltip: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const isCopied = await copyToClipboard(text)
    if (isCopied) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } else {
      setCopied(false)
    }
  }

  return (
    <TooltipProvider key={text} tooltip={tooltip}>
      <Button variant="outline" onClick={handleCopy} className="cursor-pointer transition-all duration-150 ease-in-out">
        {
          copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )
        }
      </Button>
    </TooltipProvider>
  )
}
