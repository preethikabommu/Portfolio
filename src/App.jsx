import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { ThemeProvider } from './theme/ThemeProvider';
import { TooltipProvider } from './components/ui/tooltip';
import AmbientBackground, { ScrollProgress } from './components/AmbientBackground';
import Intro from './components/Intro';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';

// Below-the-fold sections load as separate chunks. The fallbacks keep the section id and
// a rough height so anchor links and the scroll position stay stable while they load.
const loadProjects = () => import('./components/Projects');
const loadContact = () => import('./components/Contact');
const loadFooter = () => import('./components/Footer');
const Projects = lazy(loadProjects);
const Contact = lazy(loadContact);
const Footer = lazy(loadFooter);

const Placeholder = ({ id, className }) => <div id={id} aria-hidden="true" className={className} />;

function App() {
  const [entered, setEntered] = useState(false);

  // While the intro is showing, warm the lazy chunks and lock page scroll.
  useEffect(() => {
    loadProjects();
    loadContact();
    loadFooter();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = entered ? '' : 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [entered]);

  const handleEnter = useCallback((sectionId) => {
    setEntered(true);
    if (sectionId && sectionId !== 'home') {
      // wait a frame so the portfolio has mounted, then jump to the chosen section
      requestAnimationFrame(() => requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView()));
    }
  }, []);

  return (
    <ThemeProvider>
      {/* Framer Motion honours the OS "reduce motion" setting for every animation */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <AnimatePresence>{!entered && <Intro key="intro" onEnter={handleEnter} />}</AnimatePresence>

          {/* The portfolio mounts on entry, so its entrance animations play as the intro parts */}
          {entered && (
            <>
              <a href="#main" className="skip-link">
                Skip to main content
              </a>
              <AmbientBackground />
              <ScrollProgress />
              <CustomCursor />
              <Navbar />

              <main id="main" className="min-h-screen text-fg">
                <Hero />
                <About />
                <Expertise />
                <Skills />
                <Suspense fallback={<Placeholder id="projects" className="min-h-[120vh]" />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<Placeholder id="contact" className="min-h-screen" />}>
                  <Contact />
                </Suspense>
              </main>

              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </>
          )}
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
