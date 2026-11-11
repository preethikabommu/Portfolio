import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={cn(
      'inline-flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface/80 p-1.5 shadow-card backdrop-blur-xl',
      className
    )}
    {...props}
  />
);

const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={cn(
      'relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-muted outline-none transition-colors hover:text-fg',
      'data-[state=active]:text-white',
      className
    )}
    {...props}
  />
);

const TabsContent = ({ className, ...props }) => (
  <TabsPrimitive.Content className={cn('mt-10 outline-none', className)} {...props} />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
