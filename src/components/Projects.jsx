import { projects } from "../data/content.js";
import Section from "./ui/Section.jsx";
import TerminalCard from "./ui/TerminalCard.jsx";

export default function Projects() {
  return (
    <Section id="projects" title="projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <TerminalCard key={p.name} title={`~/projects/${p.name}`}>
            <p className="min-h-28 text-sm leading-relaxed text-ink/90">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-green/40 px-2.5 py-0.5 font-mono text-xs text-green"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-xs text-orange hover:underline"
              >
                view →
              </a>
            )}
          </TerminalCard>
        ))}
      </div>
    </Section>
  );
}
