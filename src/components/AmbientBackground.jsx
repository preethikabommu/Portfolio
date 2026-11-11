import { memo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const blobs = [
  { className: 'left-[-10%] top-[-5%] size-[520px] bg-orchid/20', animate: { x: [0, 80, 0], y: [0, 60, 0] }, duration: 22 },
  { className: 'right-[-12%] top-[30%] size-[560px] bg-orchid/15', animate: { x: [0, -70, 0], y: [0, 90, 0] }, duration: 26 },
  { className: 'bottom-[-12%] left-[25%] size-[480px] bg-accent-solid/20', animate: { x: [0, 60, 0], y: [0, -70, 0] }, duration: 30 },
];

/** Fixed, pointer-less layer: drifting gradient blobs (transform-only) + faint grid. Memoised: never re-renders. */
const AmbientBackground = memo(() => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {blobs.map(({ className, animate, duration }, i) => (
      <motion.div
        key={i}
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute rounded-full blur-[110px] will-change-transform ${className}`}
      />
    ))}
    <div
      className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      style={{
        backgroundImage:
          'linear-gradient(var(--t-line) 1px, transparent 1px), linear-gradient(90deg, var(--t-line) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
  </div>
));
AmbientBackground.displayName = 'AmbientBackground';

/** Thin accent bar at the very top showing reading progress. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent-solid to-orchid-text"
    />
  );
};

export default AmbientBackground;
