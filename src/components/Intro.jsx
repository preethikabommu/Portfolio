import { memo, useEffect, useId, useMemo, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

/** Gradient pairs: pastel orchid pink -> deep eggplant violet. */
const PALETTES = [
  ['#e9a8d9', '#6a2a8c'],
  ['#e49bd2', '#4a1d5c'],
  ['#b06cd0', '#2a0f3a'],
  ['#dc94cc', '#4e1c68'],
];

const SHAPES = {
  leaf: 'M100 296 C 18 226, 6 112, 100 4 C 194 112, 182 226, 100 296 Z',
  petal: 'M100 292 C 4 262, -14 112, 100 14 C 214 112, 196 262, 100 292 Z',
};

/** [x%, y%, size, rotation, shape, palette, depth] — the centre stays clear for the title. */
const LEAVES = [
  [3, 6, 1.5, -24, 'leaf', 0, 0.9],
  [6, 52, 1.6, -78, 'petal', 3, 1.2],
  [5, 94, 1.6, 200, 'leaf', 1, 0.8],
  [21, 80, 1.15, 158, 'petal', 2, 0.6],
  [17, 20, 1.1, 48, 'leaf', 1, 0.5],
  [28, 40, 0.8, -35, 'leaf', 2, 0.3],
  [27, 66, 0.8, 120, 'leaf', 3, 0.3],
  [96, 8, 1.6, 28, 'leaf', 3, 0.9],
  [95, 50, 1.6, 78, 'petal', 0, 1.2],
  [96, 94, 1.5, -160, 'leaf', 2, 0.8],
  [80, 82, 1.2, -148, 'petal', 1, 0.6],
  [84, 20, 1.1, -48, 'leaf', 2, 0.5],
  [73, 36, 0.8, 38, 'leaf', 1, 0.3],
  [73, 63, 0.8, -118, 'leaf', 0, 0.3],
  [38, -3, 1.4, 190, 'leaf', 3, 0.7],
  [62, -5, 1.5, 168, 'petal', 0, 0.7],
  [36, 103, 1.5, -8, 'leaf', 0, 0.7],
  [61, 105, 1.7, 6, 'petal', 3, 0.7],
  [49, 108, 1.1, 0, 'leaf', 1, 0.5],
];

const NAV = [
  { label: 'HOME', target: 'home' },
  { label: 'ABOUT', target: 'about' },
  { label: 'PROJECTS', target: 'projects' },
  { label: 'CONTACT', target: 'contact' },
];

/** Fine "engraved" veins drawn as two combined paths (cheap DOM, rich texture). */
const buildVeins = () => {
  const main = 'M100 292 L100 14';
  let side = '';
  for (let i = 0; i < 9; i += 1) {
    const y = 270 - i * 28;
    const w = 1 - i * 0.085;
    side += `M100 ${y} Q ${100 - 38 * w} ${y - 16} ${100 - 66 * w} ${y - 50} `;
    side += `M100 ${y} Q ${100 + 38 * w} ${y - 16} ${100 + 66 * w} ${y - 50} `;
  }
  let fine = '';
  for (let i = 0; i < 24; i += 1) {
    const y = 280 - i * 11;
    const w = Math.max(0.2, 1 - i * 0.034);
    fine += `M100 ${y} Q ${100 - 30 * w} ${y - 8} ${100 - 58 * w} ${y - 24} `;
    fine += `M100 ${y} Q ${100 + 30 * w} ${y - 8} ${100 + 58 * w} ${y - 24} `;
  }
  return { main, side, fine };
};
const VEINS = buildVeins();

const LeafSvg = memo(({ shape, palette }) => {
  const id = useId();
  const [from, to] = PALETTES[palette];
  return (
    <svg viewBox="-16 0 232 300" aria-hidden="true" className="block h-auto w-full overflow-visible">
      <defs>
        <linearGradient id={id} x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path d={SHAPES[shape]} fill={`url(#${id})`} />
      <path d={VEINS.fine} fill="none" stroke="#fff" strokeOpacity="0.1" strokeWidth="0.6" />
      <path d={VEINS.side} fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.1" />
      <path d={VEINS.main} fill="none" stroke="#fff" strokeOpacity="0.32" strokeWidth="1.6" />
    </svg>
  );
});
LeafSvg.displayName = 'LeafSvg';

const Leaf = ({ data, index, px, py, reduce }) => {
  const [x, y, size, rot, shape, palette, depth] = data;
  const shiftX = useTransform(px, (v) => v * depth * 34);
  const shiftY = useTransform(py, (v) => v * depth * 34);
  // direction away from the centre, used for the exit "bloom apart"
  const dx = (x - 50) * 0.9;
  const dy = (y - 50) * 0.9;
  const swayRange = 2 + depth * 2;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: `${x}%`, top: `${y}%`, x: reduce ? 0 : shiftX, y: reduce ? 0 : shiftY, zIndex: Math.round(depth * 10) }}
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.45, rotate: rot - 18 }}
        animate={{ opacity: 1, scale: 1, rotate: rot, transition: { duration: 1.5, delay: 0.1 + index * 0.05, ease: EASE } }}
        exit={{
          opacity: 0,
          scale: 1.35,
          x: `${dx}vw`,
          y: `${dy}vh`,
          rotate: rot + (x < 50 ? -14 : 14),
          transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
        }}
        style={{ width: `calc(clamp(110px, 19vw, 330px) * ${size})` }}
      >
        <motion.div
          animate={reduce ? undefined : { rotate: [-swayRange, swayRange, -swayRange] }}
          transition={{ duration: 7 + (index % 5) * 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 90%' }}
        >
          <LeafSvg shape={shape} palette={palette} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const fade = (delay) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.1, delay, ease: EASE } },
  exit: { opacity: 0, y: -16, filter: 'blur(6px)', transition: { duration: 0.5 } },
});

/**
 * Full-screen botanical landing page. Click / tap / Enter / Space anywhere
 * (or a top link, which also jumps to that section) to open the portfolio.
 */
const Intro = ({ onEnter }) => {
  const reduce = useReducedMotion();
  const rootRef = useRef(null);
  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const leaves = useMemo(() => LEAVES, []);

  useEffect(() => {
    rootRef.current?.focus({ preventScroll: true });
  }, []);

  const handleMove = (e) => {
    if (reduce) return;
    px.set(e.clientX / window.innerWidth - 0.5);
    py.set(e.clientY / window.innerHeight - 0.5);
  };

  const handleActivate = (e) => {
    const target = e.target.closest?.('[data-target]')?.dataset.target;
    onEnter(target);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <motion.div
      ref={rootRef}
      role="button"
      tabIndex={0}
      aria-label="Enter Preethika's portfolio. Press Enter or click anywhere."
      onClick={handleActivate}
      onKeyDown={handleKey}
      onPointerMove={handleMove}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, delay: 0.25, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[10000] cursor-pointer select-none overflow-hidden text-[#fbeaf7] outline-none focus-visible:ring-2 focus-visible:ring-[#f0b8e0] focus-visible:ring-inset"
      style={{ background: 'radial-gradient(ellipse at 50% 45%, #3a1451 0%, #200a31 55%, #12051c 100%)' }}
    >
      {/* Botanical layer */}
      <div aria-hidden="true" className="absolute inset-0">
        {leaves.map((data, i) => (
          <Leaf key={i} data={data} index={i} px={px} py={py} reduce={reduce} />
        ))}
      </div>

      {/* Soft vignette keeps the title readable over the foliage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: 'radial-gradient(ellipse at 50% 48%, rgba(18,5,28,0.78) 0%, rgba(18,5,28,0.35) 38%, transparent 68%)' }}
      />

      {/* Decorative frame lines + accent square */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30">
        <span className="absolute left-5 top-5 h-16 w-16 border-l border-t border-[#f0b8e0]/40 md:left-8 md:top-8 md:h-24 md:w-24" />
        <span className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-[#f0b8e0]/40 md:bottom-8 md:right-8 md:h-24 md:w-24" />
        <motion.span
          animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute right-[16%] top-[22%] size-3 bg-[#f0b8e0]"
        />
      </div>

      {/* Top bar */}
      <motion.div
        {...fade(0.6)}
        className="absolute inset-x-0 top-0 z-40 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-11"
      >
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.42em] text-[#fbeaf7]/90">
          Preethika
        </span>
        <span className="hidden gap-9 font-sans text-[10px] font-medium uppercase tracking-[0.3em] sm:flex">
          {NAV.map(({ label, target }) => (
            <span
              key={target}
              data-target={target}
              className="border-b border-transparent pb-1 text-[#fbeaf7]/80 transition-colors hover:border-[#f0b8e0] hover:text-white"
            >
              {label}
            </span>
          ))}
        </span>
      </motion.div>

      {/* Centre title */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          {...fade(0.5)}
          className="mb-6 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-[#f0b8e0] md:text-[11px]"
        >
          Product Development
        </motion.p>

        <motion.p
          {...fade(0.7)}
          className="font-serif text-[clamp(2.6rem,8.5vw,6.2rem)] font-medium leading-[0.98] tracking-tight"
        >
          <span className="block">PREETHIKA /</span>
          <span className="mt-2 block text-[clamp(1.5rem,4.4vw,3.4rem)] leading-[1.05]">
            ASSOCIATE TECHNICAL CONSULTANT
          </span>
        </motion.p>

        <motion.p
          {...fade(0.95)}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#fbeaf7]/80 md:text-[11px]"
        >
          <span>React</span>
          <span aria-hidden="true" className="text-[#f0b8e0]">•</span>
          <span>Spring Boot</span>
          <span aria-hidden="true" className="text-[#f0b8e0]">•</span>
          <span>PostgreSQL</span>
        </motion.p>

        <motion.span
          {...fade(1.2)}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#f0b8e0]/60 px-8 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.35em] transition-colors duration-300 hover:bg-[#f0b8e0] hover:text-[#2a0f3a]"
        >
          Explore
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </motion.span>

        <motion.span
          {...fade(1.6)}
          className="mt-6 font-sans text-[10px] uppercase tracking-[0.3em] text-[#fbeaf7]/50"
        >
          Click anywhere to enter
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Intro;
