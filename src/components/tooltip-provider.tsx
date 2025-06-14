import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";


export const TooltipProvider = ({ children, tooltip, key }: { children: React.ReactNode, tooltip: string, key?: string | number }) => {
  return (
    <Tooltip key={key || tooltip }>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}
