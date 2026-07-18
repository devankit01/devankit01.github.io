import { experience } from "../data/content.js";
import Section from "./ui/Section.jsx";

export default function Experience() {
  return (
    <Section id="experience" title="experience">
      <p className="mb-8 font-mono text-sm text-muted">$ git log --career --oneline</p>
      <ol className="space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={e.hash} data-hash={e.hash} className="relative">
            <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full border-2 border-green bg-bg sm:-left-[39px]" />
            <p className="font-mono text-sm sm:text-base">
              <span className="text-orange">* {e.hash}</span>{" "}
              <span className="font-bold text-ink">{e.role}</span>
              <span className="text-muted"> @ </span>
              <span className="text-green">{e.org}</span>
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              {e.period} · {e.place}
            </p>
            <ul className="mt-3 max-w-2xl space-y-1.5 text-sm leading-relaxed text-ink/85">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
