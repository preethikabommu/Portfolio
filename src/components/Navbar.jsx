import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/data/navLinks';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Magnetic from './ui/Magnetic';
import ThemeToggle from './ThemeToggle';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? 'border-b border-line bg-header backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12 3xl:max-w-[1760px]">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          PREETHIKA
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-solid" />
        </a>

        {/* Desktop navigation with a sliding active pill */}
        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur-xl md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === id ? 'text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  aria-hidden="true"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                />
              )}
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Magnetic className="hidden sm:inline-block">
            <Button asChild size="sm">
              <a href="#contact">Hire Me</a>
            </Button>
          </Magnetic>

          {/* Mobile navigation sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Navigate</SheetTitle>
              <SheetDescription className="sr-only">Jump to a section of the portfolio</SheetDescription>
              <nav aria-label="Mobile" className="mt-8">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map(({ id, label }) => (
                    <li key={id}>
                      <SheetClose asChild>
                        <a
                          href={`#${id}`}
                          aria-current={active === id ? 'true' : undefined}
                          className={`block rounded-xl px-4 py-3 font-display text-xl font-bold transition-colors ${
                            active === id ? 'bg-accent-soft text-accent' : 'text-fg hover:bg-surface-2'
                          }`}
                        >
                          {label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-auto">
                  <a href="#contact">Hire Me</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
