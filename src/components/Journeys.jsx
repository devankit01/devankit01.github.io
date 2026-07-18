import { useState } from "react";
import { photos, journeys } from "../data/content.js";
import Section from "./ui/Section.jsx";

function Waypoint({ src, caption }) {
  const [broken, setBroken] = useState(false);
  return (
    <li className="relative flex items-center gap-5">
      <span className="absolute -left-[31px] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 border-green bg-bg sm:-left-[39px]" />
      {broken ? (
        <div
          data-testid="photo-fallback"
          className="flex size-20 shrink-0 items-center justify-center rounded-lg border border-line bg-panel sm:size-24"
        >
          <span className="font-mono text-xl text-green">⛰</span>
        </div>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt={caption || "hike photo"}
          loading="lazy"
          onError={() => setBroken(true)}
          className="duotone size-20 shrink-0 rounded-lg border border-line object-cover sm:size-24"
        />
      )}
      <div className="font-mono text-sm">
        <p className="text-ink">
          <span className="text-green"># </span>
          {caption || "somewhere out there"}
        </p>
      </div>
    </li>
  );
}

export default function Journeys() {
  return (
    <Section id="journeys" title="journeys">
      <p className="mb-8 font-mono text-sm text-muted">
        $ cat ~/trails.log <span className="text-green"># hover a photo for full color</span>
      </p>
      <ol className="space-y-8 border-l border-line pl-6 sm:pl-8">
        {photos.map((p) => (
          <Waypoint key={p.src} src={p.src} caption={p.caption} />
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
