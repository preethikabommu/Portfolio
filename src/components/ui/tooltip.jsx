import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

const TooltipProvider = ({ delayDuration = 250, ...props }) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
);
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({ className, sideOffset = 8, ...props }) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'z-[110] rounded-lg border border-line bg-fg px-3 py-1.5 text-xs font-medium text-bg shadow-lift [animation:pop-in_0.15s_ease]',
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
