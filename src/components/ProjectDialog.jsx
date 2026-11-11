import { Check, ExternalLink } from 'lucide-react';
import { coverStyle } from '@/lib/cover';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { GithubIcon } from './ui/Icons';

/** Full project detail view. Loaded lazily — it only ships when a card is opened. */
const ProjectDialog = ({ project, onClose }) => {
  const { title, category, episode, description, features, tags, github, live, hue, type } = project;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0">
        <div aria-hidden="true" className="relative h-40 overflow-hidden p-6" style={coverStyle(hue)}>
          <Badge variant="glass" size="xs" className="font-bold">
            {episode}
          </Badge>
          <span className="absolute -bottom-12 right-4 font-display text-[10rem] font-bold leading-none text-white/15">
            {title.charAt(0)}
          </span>
        </div>

        <div className="space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              {category} · {type === 'capstone' ? 'Capstone Project' : 'Personal Project'}
            </p>
            <DialogTitle className="text-3xl">{title}</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">{description}</DialogDescription>
          </div>

          <section aria-labelledby="dialog-features">
            <h3 id="dialog-features" className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-accent">
              Key features
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="dialog-tech">
            <h3 id="dialog-tech" className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-accent">
              Technology stack
            </h3>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-wrap gap-3 border-t border-line pt-6">
            <Button asChild variant="solid">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" />
                View on GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            {live && (
              <Button asChild variant="outline">
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Live Demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
