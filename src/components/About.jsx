import { Briefcase } from 'lucide-react';
import { experience, focusAreas, languages, stats, techStack } from '../data/profile';
import Card from './ui/PinCard';
import { Section, SectionHeader, Tag } from './ui/Section';
import { MASONRY_3 } from './ui/masonry';

const CardLabel = ({ children }) => (
  <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-accent">{children}</h3>
);

const About = () => (
  <Section id="about" labelledBy="about-title" className="overflow-hidden">
    <SectionHeader
      id="about-title"
      eyebrow="EPISODE 01"
      label="ABOUT THE ENGINEER"
      title="EPISODE SYNOPSIS"
      accent="ORIGIN & VISION."
    />

    <div className={MASONRY_3}>
      <Card className="p-8 md:p-10">
        <CardLabel>Professional Experience</CardLabel>
        <div className="mb-5 flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-solid text-white shadow-card">
            <Briefcase className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-2xl font-bold leading-tight tracking-tight">{experience.company}</p>
            <p className="mt-1 text-sm font-medium text-muted">
              {experience.role} <span aria-hidden="true">·</span> {experience.team}
            </p>
          </div>
        </div>
        <p className="font-light leading-relaxed text-muted">{experience.summary}</p>
        <ul className="mt-5 space-y-3 text-sm font-light leading-relaxed text-muted">
          {experience.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span aria-hidden="true" className="font-bold text-accent">&#8250;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used at work">
          {experience.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </Card>

      <Card delay={0.04} className="p-8 md:p-10">
        <CardLabel>Cast &amp; Background</CardLabel>
        <div className="space-y-4">
          <p className="text-lg font-medium leading-relaxed md:text-xl">
            I am <strong className="font-bold">Preethika Bommu</strong>, an Associate Technical Consultant at Perficient working in product development, with a B.Tech in Computer Science from Vellore Institute of Technology (GPA 8.96).
          </p>
          <p className="font-light leading-relaxed text-muted">
            My technical narrative bridges rigorous algorithmic problem-solving with full-stack software architecture —
            translating complex backend logic into seamless, high-performance user experiences. I design clean REST
            APIs, model data workflows, and ship user-centric features end-to-end, from database design to polished
            interfaces.
          </p>
          <p className="font-light leading-relaxed text-muted">
            On the data side, I build predictive systems from real-world datasets, such as airfare pricing and
            credit-card fraud detection, focusing as much on accuracy metrics as on the story the numbers tell.
            I&apos;m equally comfortable tuning a Django-free Python pipeline or containerizing a full-stack app for
            cloud deployment.
          </p>
          <p className="font-light leading-relaxed text-muted">
            Beyond engineering, I lead campus initiatives as Co-Secretary of VIT&apos;s Vriksh club and I&apos;m
            steadily deepening my focus on AI-driven products that help people make better decisions — the thread that
            runs through every project I take on.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <li key={area}>
              <Tag>{area}</Tag>
            </li>
          ))}
        </ul>
      </Card>

      <Card delay={0.08} className="p-8 md:p-10">
        <CardLabel>By the Numbers</CardLabel>
        <dl className="grid grid-cols-3 gap-4 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl bg-surface-2 px-2 py-4">
              <dd className="font-display text-3xl font-bold text-accent">{value}</dd>
              <dt className="mt-1 text-[11px] leading-tight text-muted">{label}</dt>
            </div>
          ))}
        </dl>
      </Card>

      <Card delay={0.12} className="p-8 md:p-10">
        <CardLabel>Milestones &amp; Accolades</CardLabel>
        <ul className="space-y-4 text-sm font-light leading-relaxed text-muted">
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="font-bold text-accent">&#8250;</span>
            <span>
              <strong className="font-semibold text-fg">Associate Technical Consultant</strong> at Perficient, in product development.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="font-bold text-accent">&#8250;</span>
            <span>
              <strong className="font-semibold text-fg">B.Tech Computer Science</strong> at VIT Vellore with{' '}
              <strong className="font-semibold text-fg">GPA 8.96/10</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="font-bold text-accent">&#8250;</span>
            <span>
              <strong className="font-semibold text-fg">Co-Secretary of Vriksh Club</strong>, leading 15+ campus events
              with 100+ participants each.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="font-bold text-accent">&#8250;</span>
            <span>
              Certified <strong className="font-semibold text-fg">Full Stack Web Developer</strong> &amp;{' '}
              <strong className="font-semibold text-fg">SQL Bootcamp</strong> graduate.
            </span>
          </li>
        </ul>
        <p className="mt-6 font-mono text-xs text-subtle">{'// SEASON_01 HIGHLIGHTS'}</p>
      </Card>

      <Card delay={0.04} className="p-8 md:p-10">
        <CardLabel>Production Tech Stack</CardLabel>
        <p className="mb-5 text-base font-semibold">Equipped with industry-grade instruments for robust scaling.</p>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech}>
              <Tag className="uppercase tracking-wider transition-transform hover:scale-105 hover:border-accent-line hover:text-accent">
                {tech}
              </Tag>
            </li>
          ))}
        </ul>
      </Card>

      <Card delay={0.08} className="p-8 md:p-10">
        <CardLabel>Languages Known</CardLabel>
        <p className="mb-5 text-base font-semibold">Communicating across contexts with clarity.</p>
        <ul className="flex flex-wrap gap-2">
          {languages.map(({ name, level }) => (
            <li key={name}>
              <Tag className="uppercase tracking-wider transition-transform hover:scale-105 hover:border-accent-line hover:text-accent">
                {name}
                <span aria-hidden="true" className="mx-1.5">·</span>
                <span className="sr-only">, </span>
                <span className="text-subtle">{level}</span>
              </Tag>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

export default About;
