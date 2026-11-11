import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const EASE = [0.22, 1, 0.36, 1];

/** Page section with a consistent container; ultrawide screens get a wider max width. */
export const Section = ({ id, labelledBy, className = '', children }) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`relative w-full px-6 py-20 md:px-12 md:py-28 ${className}`}
  >
    <div className="mx-auto w-full max-w-7xl 3xl:max-w-[1760px]">{children}</div>
  </section>
);

const headerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const SectionHeader = ({ id, eyebrow, label, title, accent, description }) => (
  <motion.div
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
    className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
  >
    <div className="max-w-2xl space-y-5">
      <motion.p variants={item}>
        <Badge className="gap-2 bg-surface/80 px-3.5 py-1.5 text-[11px] uppercase tracking-widest shadow-card backdrop-blur">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-solid" />
          <span className="font-bold text-accent">{eyebrow}</span>
          <span aria-hidden="true" className="text-subtle">|</span>
          <span>{label}</span>
        </Badge>
      </motion.p>
      <motion.h2
        id={id}
        variants={item}
        className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
      >
        <span className="block">{title}</span>
        <span className="block bg-gradient-to-r from-grad-from to-orchid-text bg-clip-text pb-1 text-transparent">
          {accent}
        </span>
      </motion.h2>
      {/* Animated accent rule */}
      <motion.span
        aria-hidden="true"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } } }}
        className="block h-1 w-20 origin-left rounded-full bg-gradient-to-r from-accent-solid to-orchid-text"
      />
    </div>
    {description && (
      <motion.p variants={item} className="max-w-xs text-sm leading-relaxed text-muted md:text-base">
        {description}
      </motion.p>
    )}
  </motion.div>
);

/** Small mono label chip used across cards (shadcn Badge underneath). */
export const Tag = ({ children, className = '' }) => (
  <Badge className={className}>{children}</Badge>
);
