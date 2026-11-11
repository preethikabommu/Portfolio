import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-mono transition-colors [&_svg]:size-3',
  {
    variants: {
      variant: {
        default: 'border-line bg-surface-2 text-muted',
        accent: 'border-accent-line bg-accent-soft text-accent',
        solid: 'border-transparent bg-accent-solid text-white',
        glass: 'border-white/20 bg-black/25 text-white backdrop-blur-md',
      },
      size: {
        default: 'px-3 py-1 text-xs',
        sm: 'px-2.5 py-0.5 text-[11px]',
        xs: 'px-2 py-0.5 text-[10px] tracking-widest',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

const Badge = ({ className, variant, size, ...props }) => (
  <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
);

export { Badge, badgeVariants };
