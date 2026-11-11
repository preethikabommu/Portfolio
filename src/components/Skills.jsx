import { skillCategories } from '../data/profile';
import Card from './ui/PinCard';
import { Section, SectionHeader, Tag } from './ui/Section';
import { GRID_3 } from './ui/masonry';

const Skills = () => (
  <Section id="skills" labelledBy="skills-title" className="bg-surface-2/50">
    <SectionHeader
      id="skills-title"
      eyebrow="EPISODE 03"
      label="THE TOOLKIT"
      title="SKILLS"
      accent="BUILT TO SHIP."
      description="Six focus areas, from interface craft to infrastructure — the tools I reach for every day."
    />

    <ul className={`${GRID_3} list-none`}>
      {skillCategories.map((category, i) => (
        <Card as="li" key={category.title} delay={(i % 3) * 0.07} className="flex h-full flex-col p-7 !mb-0">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="rounded-full border border-accent-line bg-accent-soft px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              {category.tag}
            </p>
            <p className="font-mono text-xs text-subtle">
              <span className="sr-only">Category </span>
              {String(i + 1).padStart(2, '0')} / {String(skillCategories.length).padStart(2, '0')}
            </p>
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
            {category.title}
          </h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted">{category.desc}</p>

          <ul className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
            {category.skills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </ul>
  </Section>
);

export default Skills;
