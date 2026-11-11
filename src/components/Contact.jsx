import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { contactChannels } from '../data/profile';
import Card from './ui/PinCard';
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './ui/Icons';
import { Section } from './ui/Section';

const CHANNEL_ICONS = { phone: PhoneIcon, mail: MailIcon, linkedin: LinkedinIcon, github: GithubIcon };

const Contact = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const parallax = useTransform(scrollYProgress, [0, 1], ['-10%', '20%']);

  return (
    <Section id="contact" labelledBy="contact-title" className="overflow-hidden border-t border-line">
      <div ref={ref} className="relative">
        {/* Decorative parallax watermark */}
        <motion.div
          aria-hidden="true"
          style={{ y: reduceMotion ? 0 : parallax }}
          className="pointer-events-none absolute inset-x-0 -top-10 flex select-none justify-center overflow-hidden"
        >
          <span className="font-display text-[22vw] font-bold uppercase leading-none tracking-tighter text-accent-solid/[0.07]">
            Contact
          </span>
        </motion.div>

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="space-y-6 lg:pt-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest shadow-card">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-solid" />
              <span className="font-bold text-accent">EPISODE 04 // GET IN TOUCH</span>
            </p>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">Open Direct Lines</p>
            <h2 id="contact-title" className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              <span className="block">REACH ME</span>
              <span className="block bg-gradient-to-r from-grad-from to-orchid-text bg-clip-text text-transparent">
                DIRECTLY.
              </span>
            </h2>
            <p className="max-w-md font-light leading-relaxed text-muted">
              No forms, no waiting — my contact lines are always open. Call, email, or drop a message on any of my
              channels and I&apos;ll get back to you.
            </p>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-accent-solid" />
              Open to collaboration &amp; new opportunities
            </p>
          </div>

          <ul className="grid list-none gap-6 sm:grid-cols-2">
            {contactChannels.map(({ icon, label, value, href, note, external }, i) => {
              const Icon = CHANNEL_ICONS[icon];
              return (
                <Card as="li" key={label} delay={i * 0.07} className="!mb-0">
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex h-full min-h-[200px] flex-col justify-between gap-8 rounded-3xl p-6"
                  >
                    <span className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                        <Icon />
                      </span>
                      <ArrowUpRightIcon className="h-5 w-5 text-subtle transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                    </span>
                    <span className="space-y-1.5">
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-subtle">{label}</span>
                      <span className="block break-all text-base font-bold transition-colors group-hover:text-accent md:text-lg">
                        {value}
                      </span>
                      <span className="block text-xs font-light text-muted">
                        {note}
                        {external && <span className="sr-only"> (opens in a new tab)</span>}
                      </span>
                    </span>
                  </a>
                </Card>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
