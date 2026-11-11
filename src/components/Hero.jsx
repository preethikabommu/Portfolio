import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Code2, GraduationCap, Sparkles, Users } from 'lucide-react';
import pictureImg from '../assets/Portfolio/preethika.jpg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Magnetic from './ui/Magnetic';
import { PlayIcon } from './ui/Icons';

const EASE = [0.22, 1, 0.36, 1];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const rise = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

/** Floating glass stat chip that bobs gently around the portrait. */
const FloatChip = ({ icon: Icon, label, value, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1 + delay, duration: 0.6, ease: EASE }}
    className={`absolute z-20 ${className}`}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: 'easeInOut' }}
      className="flex items-center gap-3 rounded-2xl border border-line bg-surface/75 px-4 py-3 shadow-lift backdrop-blur-xl"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon className="size-[18px]" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-bold">{value}</span>
        <span className="block text-[11px] text-muted">{label}</span>
      </span>
    </motion.div>
  </motion.div>
);

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef(null);

  // Pointer-driven 3D tilt (springs keep it smooth, transform-only)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), { stiffness: 140, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), { stiffness: 140, damping: 18 });

  const onMove = (e) => {
    if (reduceMotion || e.pointerType !== 'mouse' || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen w-full items-center px-6 pb-20 pt-28 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] 3xl:max-w-[1760px]">
        {/* Left: story */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-start gap-7">
          <motion.p variants={rise}>
            <Badge variant="accent" className="gap-2.5 px-4 py-1.5 uppercase tracking-widest shadow-card">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-solid opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-solid" />
              </span>
              Netflix Developer Series
              <span aria-hidden="true" className="text-subtle">|</span>
              <span className="text-muted">Seasons 2022 - 2026</span>
            </Badge>
          </motion.p>

          <motion.p variants={rise} className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Product Development at Perficient
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={rise}
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="block">PREETHIKA</span>
            <span className="mt-3 block max-w-[14ch] bg-gradient-to-r from-grad-from to-orchid-text bg-clip-text pb-2 text-[clamp(2.1rem,5vw,4rem)] leading-[1.02] text-transparent sm:max-w-none">
              ASSOCIATE TECHNICAL CONSULTANT
            </span>
          </motion.h1>

          <motion.p variants={rise} className="max-w-xl text-lg font-light leading-relaxed text-muted">
            Associate Technical Consultant at Perficient, building scalable product platforms and REST APIs, and transforming
            complex data into actionable insights. B.Tech Computer Science, VIT Vellore.
          </motion.p>

          <motion.ul variants={rise} className="flex flex-wrap items-center gap-2" aria-label="Core stack">
            {['React', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Docker'].map((tech) => (
              <li key={tech}>
                <Badge size="sm">{tech}</Badge>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={rise} className="flex flex-wrap items-center gap-4 pt-2">
            <Magnetic>
              <Button asChild size="lg">
                <a href="#projects">
                  <PlayIcon />
                  View Projects
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right: portrait stage */}
        <div
          ref={stageRef}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          className="relative mx-auto w-full max-w-[420px] [perspective:1200px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
            style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-solid/50 via-orchid/40 to-orchid/30 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70 p-3 shadow-lift backdrop-blur-xl">
              <Badge variant="solid" size="xs" className="absolute left-7 top-7 z-10 font-bold">
                <Sparkles aria-hidden="true" /> FEATURED DEV
              </Badge>
              <img
                src={pictureImg}
                alt="Portrait of Preethika Bommu"
                width="640"
                height="780"
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-3xl object-cover"
              />
            </div>
          </motion.div>

          <FloatChip icon={GraduationCap} value="GPA 8.96" label="B.Tech CS · VIT Vellore" className="-left-3 top-[14%] sm:-left-10" />
          <FloatChip icon={Users} value="100+ Users" label="Test users served" className="-right-3 top-[48%] sm:-right-10" delay={0.4} />
          <FloatChip icon={Code2} value="Full-Stack" label="React · Spring Boot · PostgreSQL" className="-bottom-4 left-[10%] sm:left-[4%]" delay={0.8} />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-subtle transition-colors hover:text-accent md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="size-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
