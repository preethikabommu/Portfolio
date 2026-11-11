import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogTitle = ({ className, ...props }) => (
  <DialogPrimitive.Title className={cn('font-display text-2xl font-bold tracking-tight', className)} {...props} />
);
const DialogDescription = ({ className, ...props }) => (
  <DialogPrimitive.Description className={cn('text-sm text-muted', className)} {...props} />
);

const DialogOverlay = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=open]:[animation:overlay-in_0.2s_ease] data-[state=closed]:[animation:overlay-out_0.15s_ease_forwards]',
      className
    )}
    {...props}
  />
);

const DialogContent = ({ className, children, ...props }) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'fixed left-1/2 top-1/2 z-[101] max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-line bg-surface text-fg shadow-lift outline-none',
        'data-[state=open]:[animation:dialog-in_0.25s_cubic-bezier(0.22,1,0.36,1)] data-[state=closed]:[animation:dialog-out_0.15s_ease_forwards]',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        aria-label="Close"
        className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
      >
        <X className="size-4" aria-hidden="true" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle, DialogDescription };
