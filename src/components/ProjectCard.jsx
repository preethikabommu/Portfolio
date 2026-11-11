import { memo } from 'react';
import { Check, ExternalLink, Maximize2 } from 'lucide-react';
import { coverStyle } from '@/lib/cover';
import PinCard from './ui/PinCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { GithubIcon } from './ui/Icons';

const COVER_HEIGHT = 'h-40';
const MAX_CARD_TAGS = 4;

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

const ProjectCard = ({ project, delay = 0, onOpen }) => {
  const { title, category, episode, match, description, features, tags, github, live, hue } = project;
  const shownTags = tags.slice(0, MAX_CARD_TAGS);
  const hiddenTags = tags.length - shownTags.length;
  const repoLabel = github.replace('https://github.com/', 'github.com/').replace('?tab=repositories&q=', ' · search: ');

  return (
    <PinCard as="li" delay={delay} className="flex h-full flex-col !mb-0">
      {/* Cover art */}
      <div
        aria-hidden="true"
        className={`relative flex shrink-0 items-start justify-between overflow-hidden p-5 ${COVER_HEIGHT}`}
        style={coverStyle(hue)}
      >
        <Badge variant="glass" size="xs" className="font-bold">
          {episode}
        </Badge>
        {match && <span className="font-mono text-xs font-bold text-white/90">{match} Match</span>}
        <span className="pointer-events-none absolute -bottom-10 -right-2 font-display text-[7rem] font-bold leading-none text-white/15 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-110">
          {title.charAt(0)}
        </span>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">{category}</p>
        <h4 className="mt-1.5 font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
          {title}
        </h4>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted">{description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted" aria-label={`${title} key features`}>
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${title} technology stack`}>
          {shownTags.map((tag) => (
            <li key={tag}>
              <Badge size="sm">{tag}</Badge>
            </li>
          ))}
          {hiddenTags > 0 && (
            <li>
              <Badge size="sm" variant="accent">
                +{hiddenTags}
              </Badge>
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
          <HoverCard openDelay={150} closeDelay={80}>
            <HoverCardTrigger asChild>
              <Button asChild size="sm" variant="solid">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="size-4" />
                  <span>
                    GitHub<span className="sr-only"> repository for {title}</span>
                  </span>
                  <NewTab />
                </a>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent align="start" className="space-y-2">
              <p className="flex items-center gap-2 font-display text-sm font-bold">
                <GithubIcon className="size-4" /> {title}
              </p>
              <p className="break-all font-mono text-[11px] text-muted">{repoLabel}</p>
              <p className="text-xs text-subtle">Opens the source code in a new tab.</p>
            </HoverCardContent>
          </HoverCard>

          {live && (
            <Button asChild size="sm" variant="outline">
              <a href={live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" aria-hidden="true" />
                <span>
                  Live Demo<span className="sr-only"> of {title}</span>
                </span>
                <NewTab />
              </a>
            </Button>
          )}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="ml-auto size-9"
                onClick={() => onOpen(project)}
                aria-label={`View details for ${title}`}
              >
                <Maximize2 className="size-4" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Project details</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </PinCard>
  );
};

export default memo(ProjectCard);
