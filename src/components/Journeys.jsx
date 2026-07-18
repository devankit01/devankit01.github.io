import { photos, journeys } from "../data/content.js";
import Section from "./ui/Section.jsx";
import DuotonePhoto from "./ui/DuotonePhoto.jsx";

export default function Journeys() {
  return (
    <Section id="journeys" title="journeys" className="max-w-6xl">
      <p className="mb-8 font-mono text-sm text-muted">
        $ ls ~/trails <span className="text-green"># hover a photo for full color</span>
      </p>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {photos.map((p) => (
          <DuotonePhoto key={p.src} src={p.src} caption={p.caption} />
        ))}
      </div>
      <p className="mt-6 font-mono text-sm">
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
