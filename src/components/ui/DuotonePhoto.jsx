import { useState } from "react";

export default function DuotonePhoto({ src, caption }) {
  const [broken, setBroken] = useState(false);
  return (
    <figure className="group mb-4 break-inside-avoid overflow-hidden rounded-lg border border-line bg-panel">
      {broken ? (
        <div
          data-testid="photo-fallback"
          className="flex h-44 items-center justify-center bg-gradient-to-br from-panel via-bg to-panel"
        >
          <span className="font-mono text-2xl text-green">⛰</span>
        </div>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt={caption || "travel photo"}
          loading="lazy"
          onError={() => setBroken(true)}
          className="duotone block w-full"
        />
      )}
      <figcaption className="px-3 py-2 font-mono text-xs text-muted">
        <span className="text-green"># </span>
        {caption || "somewhere out there"}
      </figcaption>
    </figure>
  );
}
