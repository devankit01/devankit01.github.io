import { about } from "../data/content.js";
import Section from "./ui/Section.jsx";
import TerminalCard from "./ui/TerminalCard.jsx";

export default function About() {
  return (
    <Section id="about" title="about">
      <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
        <p className="max-w-prose leading-relaxed text-ink/90">
          <span className="font-mono text-sm text-muted">{"/* "}</span>
          {about.story}
          <span className="font-mono text-sm text-muted">{" */"}</span>
        </p>
        <TerminalCard title="ankit --stats">
          <ul className="space-y-3 font-mono text-sm">
            {about.stats.map((s) => (
              <li key={s.flag} className="flex flex-wrap gap-x-3">
                <span className="text-green">{s.flag}</span>
                <span className="text-ink/90">{s.value}</span>
              </li>
            ))}
          </ul>
        </TerminalCard>
      </div>
    </Section>
  );
}
