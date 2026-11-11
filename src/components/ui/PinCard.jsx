import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const MotionCard = motion.create(Card);

const trackPointer = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

/**
 * Pinterest-style "pin": shadcn Card + scroll-in reveal, hover lift and a
 * pointer-following glow. In a CSS-columns masonry it never splits across columns.
 */
const PinCard = ({ as = 'div', delay = 0, className, children, ...rest }) => (
  <MotionCard
    as={as}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    onPointerMove={trackPointer}
    className={cn(
      'group relative mb-6 break-inside-avoid overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-accent-line hover:shadow-lift',
      className
    )}
    {...rest}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: 'radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), var(--t-glow), transparent 70%)',
      }}
    />
    <div className="relative flex h-full flex-col">{children}</div>
  </MotionCard>
);

export default PinCard;
