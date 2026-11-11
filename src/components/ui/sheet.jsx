import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetTitle = ({ className, ...props }) => (
  <SheetPrimitive.Title className={cn('font-display text-lg font-bold tracking-tight', className)} {...props} />
);
const SheetDescription = ({ className, ...props }) => (
  <SheetPrimitive.Description className={cn('text-sm text-muted', className)} {...props} />
);

/** Right-hand slide-over panel used for the mobile navigation. */
const SheetContent = ({ className, children, ...props }) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm [animation:overlay-in_0.2s_ease] data-[state=closed]:[animation:overlay-out_0.15s_ease_forwards]" />
    <SheetPrimitive.Content
      className={cn(
        'fixed inset-y-0 right-0 z-[101] flex h-full w-[82%] max-w-sm flex-col border-l border-line bg-surface p-6 shadow-lift outline-none',
        '[animation:sheet-in_0.3s_cubic-bezier(0.22,1,0.36,1)] data-[state=closed]:[animation:sheet-out_0.2s_ease_forwards]',
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close
        aria-label="Close menu"
        className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-line bg-surface-2 text-fg transition hover:text-accent"
      >
        <X className="size-5" aria-hidden="true" />
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
);

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle, SheetDescription };
