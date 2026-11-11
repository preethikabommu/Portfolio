import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCED = '(prefers-reduced-motion: reduce)';

/** Cursor dot + ring + soft spotlight. Enhancement only: precise pointers, no reduced-motion. */
const CustomCursor = () => {
  const [enabled] = useState(
    () => window.matchMedia(FINE_POINTER).matches && !window.matchMedia(REDUCED).matches
  );
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const dotX = useSpring(x, { stiffness: 1200, damping: 60 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 60 });
  const ringX = useSpring(x, { stiffness: 380, damping: 32 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32 });
  const glowX = useSpring(x, { stiffness: 120, damping: 24 });
  const glowY = useSpring(y, { stiffness: 120, damping: 24 });

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add('custom-cursor');

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const opacity = visible ? 1 : 0;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      <motion.div
        style={{ x: glowX, y: glowY, background: 'radial-gradient(circle, var(--t-glow) 0%, transparent 70%)' }}
        animate={{ opacity }}
        className="absolute -left-[350px] -top-[350px] size-[700px] rounded-full will-change-transform"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ opacity }}
        className="absolute -left-6 -top-6 size-12 rounded-full border border-accent-line will-change-transform"
      />
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ opacity }}
        className="absolute -left-1.5 -top-1.5 size-3 rounded-full bg-accent-solid will-change-transform"
      />
    </div>
  );
};

export default CustomCursor;
