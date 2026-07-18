import { trails, journeys } from "../data/content.js";
import Section from "./ui/Section.jsx";

const XP_PER_LEVEL = 1000;

function LevelBar({ totalXp }) {
  const level = Math.floor(totalXp / XP_PER_LEVEL) + 1;
  const progress = (totalXp % XP_PER_LEVEL) / XP_PER_LEVEL;
  const filled = Math.round(progress * 20);
  return (
    <div className="mb-10 font-mono text-sm">
      <p>
        <span className="text-orange">LVL {level}</span>
        <span className="text-muted"> hiker · </span>
        <span className="text-green">{totalXp} XP</span>
      </p>
      <p aria-hidden="true" className="mt-1 tracking-tighter">
        <span className="text-muted">[</span>
        <span className="text-green">{"█".repeat(filled)}</span>
        <span className="text-line">{"░".repeat(20 - filled)}</span>
        <span className="text-muted">]</span>
        <span className="ml-2 text-muted">
          {totalXp % XP_PER_LEVEL}/{XP_PER_LEVEL} to LVL {level + 1}
        </span>
      </p>
    </div>
  );
}

function Waypoint({ trail }) {
  return (
    <li className="relative">
      <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full border-2 border-green bg-bg sm:-left-[39px]" />
      <div className="min-w-0 font-mono text-sm">
        <p className="text-xs text-muted">{trail.date}</p>
        <p className="mt-0.5 font-bold text-ink">{trail.spot}</p>
        <p className="mt-0.5 text-muted">
          {trail.flag} {trail.country}
        </p>
        <p className="mt-1.5">
          <span className="rounded-full border border-green/40 px-2 py-0.5 text-xs text-green">
            +{trail.xp} XP
          </span>
          {trail.badge && (
            <span className="ml-2 text-xs text-orange">🏆 {trail.badge}</span>
          )}
        </p>
      </div>
    </li>
  );
}

export default function Journeys() {
  const totalXp = trails.reduce((sum, t) => sum + t.xp, 0);
  return (
    <Section id="journeys" title="journeys">
      <p className="mb-6 font-mono text-sm text-muted">
        $ cat ~/trails.log <span className="text-green"># every summit grants xp</span>
      </p>
      <LevelBar totalXp={totalXp} />
      <ol className="space-y-10 border-l border-line pl-6 sm:pl-8">
        {trails.map((t) => (
          <Waypoint key={t.spot} trail={t} />
        ))}
      </ol>
      <p className="mt-10 font-mono text-sm">
        <span className="text-muted">$ open </span>
        <a
          href={journeys.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green underline-offset-4 hover:underline"
        >
          instagram/{journeys.handle}
        </a>
      </p>
    </Section>
  );
}
