import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '@/lib/utils';

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = ({ className, align = 'center', sideOffset = 10, ...props }) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-[110] w-72 rounded-2xl border border-line bg-surface/95 p-4 text-fg shadow-lift outline-none backdrop-blur-xl [animation:pop-in_0.18s_ease]',
        className
      )}
      {...props}
    />
  </HoverCardPrimitive.Portal>
);

export { HoverCard, HoverCardTrigger, HoverCardContent };
