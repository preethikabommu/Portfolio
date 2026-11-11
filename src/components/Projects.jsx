import { Suspense, lazy, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_CATEGORIES, projects } from '@/data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from './ProjectCard';
import { Section, SectionHeader } from './ui/Section';
import { GRID_3 } from './ui/masonry';

// Detail dialog (and its Radix Dialog code) is only fetched the first time a card is opened.
const ProjectDialog = lazy(() => import('./ProjectDialog'));

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'capstone', label: PROJECT_CATEGORIES.capstone },
  { id: 'personal', label: PROJECT_CATEGORIES.personal },
];

const countOf = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.type === id).length);

const ProjectGroup = ({ type, title, onOpen }) => {
  const items = projects.filter((p) => p.type === type);
  const headingId = `projects-${type}`;

  return (
    <div className="mb-14 last:mb-0">
      <h3 id={headingId} className="mb-6 flex items-center gap-3 font-display text-2xl font-bold tracking-tight">
        {title}
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs font-bold text-accent">
          {items.length}
        </span>
      </h3>
      <ul aria-labelledby={headingId} className={`${GRID_3} list-none`}>
        {items.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i % 3) * 0.08} onOpen={onOpen} />
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const handleOpen = useCallback((project) => setSelected(project), []);
  const handleClose = useCallback(() => setSelected(null), []);

  const groups = filter === 'all' ? ['capstone', 'personal'] : [filter];

  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeader
        id="projects-title"
        eyebrow="ORIGINALS"
        label="SELECTED WORK"
        title="PROJECTS"
        accent="BUILT & DEPLOYED."
        description="Capstone builds and personal projects — every card links to its source on GitHub."
      />

      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList aria-label="Filter projects">
          {FILTERS.map(({ id, label }) => (
            <TabsTrigger key={id} value={id}>
              {filter === id && (
                <motion.span
                  layoutId="project-tab-pill"
                  aria-hidden="true"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-accent-solid shadow-card"
                />
              )}
              <span className="relative">
                {label} <span className={filter === id ? 'text-white/80' : 'text-subtle'}>({countOf(id)})</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {FILTERS.map(({ id }) => (
          <TabsContent key={id} value={id}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              {groups.map((type) => (
                <ProjectGroup key={type} type={type} title={PROJECT_CATEGORIES[type]} onOpen={handleOpen} />
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <Suspense fallback={null}>
        {selected && <ProjectDialog project={selected} onClose={handleClose} />}
      </Suspense>
    </Section>
  );
};

export default Projects;
