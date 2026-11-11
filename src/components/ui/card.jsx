import { cn } from '@/lib/utils';

/** shadcn Card, restyled: glass surface, hairline border, soft shadow. `as` lets lists use <li>. */
const Card = ({ as: Comp = 'div', className, ...props }) => (
  <Comp
    data-slot="card"
    className={cn(
      'rounded-3xl border border-line bg-surface/80 text-fg shadow-card backdrop-blur-xl',
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }) => <div className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />;
const CardTitle = ({ as: Comp = 'h3', className, ...props }) => (
  <Comp className={cn('font-display text-xl font-bold tracking-tight', className)} {...props} />
);
const CardDescription = ({ className, ...props }) => <p className={cn('text-sm text-muted', className)} {...props} />;
const CardContent = ({ className, ...props }) => <div className={cn('p-6 pt-0', className)} {...props} />;
const CardFooter = ({ className, ...props }) => <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
