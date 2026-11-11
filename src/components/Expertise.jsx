import { coverStyle } from '@/lib/cover';
import { expertise } from '../data/profile';
import Card from './ui/PinCard';
import { Section, SectionHeader } from './ui/Section';
import { GRID_4 } from './ui/masonry';

const Expertise = () => (
  <Section id="expertise" labelledBy="expertise-title">
    <SectionHeader
      id="expertise-title"
      eyebrow="EPISODE 02"
      label="CORE COMPETENCIES"
      title="EXPERTISE"
      accent="TECHNICAL CAPABILITIES."
      description="Merging full-stack engineering, data analytics, and clean REST API design into production-ready platforms."
    />

    <ul className={`${GRID_4} list-none`}>
      {expertise.map((item, i) => (
        <Card as="li" key={item.number} delay={i * 0.07} className="h-full !mb-0">
          {/* Cover "pin" art – height varies to create the masonry rhythm */}
          <div
            aria-hidden="true"
            className="relative flex h-32 shrink-0 items-end justify-between overflow-hidden px-6 pb-4"
            style={{
              ...coverStyle(item.hue),
            }}
          >
            <span className="font-display text-5xl font-bold text-white/90">{item.number}</span>
            <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
          </div>

          <div className="space-y-3 p-6">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">{item.tag}</p>
            <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
              {item.title}
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted">{item.text}</p>
          </div>
        </Card>
      ))}
    </ul>
  </Section>
);

export default Expertise;
