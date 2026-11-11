import { NAV_LINKS } from '../data/navLinks';
import { contactChannels } from '../data/profile';

const social = contactChannels.filter((c) => c.external);
const email = contactChannels.find((c) => c.icon === 'mail');
const phone = contactChannels.find((c) => c.icon === 'phone');

const linkClass = 'transition-colors hover:text-accent';

const Footer = () => (
  <footer className="relative z-10 border-t border-line bg-surface px-6 py-14 md:px-12">
    <div className="mx-auto flex max-w-7xl flex-col gap-10 3xl:max-w-[1760px]">
      <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-10 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
            PREETHIKA
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-solid" />
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-subtle">
            {'// NETFLIX DEVELOPER SERIES • SEASON 2026'}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col justify-between gap-6 font-mono text-xs text-muted md:flex-row md:items-center">
        <ul className="flex items-center gap-6">
          {social.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={`${linkClass} uppercase tracking-wider`}>
                {label} //<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="uppercase tracking-widest text-subtle">Bengaluru, IN</p>
      </div>

      <div className="flex flex-col justify-between gap-4 font-mono text-xs text-muted md:flex-row md:items-center">
        <a href={email.href} className={`${linkClass} uppercase tracking-wider`}>
          {email.value}
        </a>
        <a href={phone.href} className={`${linkClass} uppercase tracking-widest`}>
          {phone.value}
        </a>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-widest text-subtle md:flex-row">
        <p>&copy; {new Date().getFullYear()} Preethika Bommu. All Rights Reserved.</p>
        <p className="text-accent">STREAMING WORLDWIDE &bull; BUILT WITH REACT &amp; FRAMER MOTION</p>
      </div>
    </div>
  </footer>
);

export default Footer;
