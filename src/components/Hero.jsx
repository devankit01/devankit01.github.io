import { identity } from "../data/content.js";
import useTypewriter from "../hooks/useTypewriter.js";
import RidgelineDivider from "./ui/RidgelineDivider.jsx";

const ACCENTS = ["text-green", "text-orange"];

export default function Hero() {
  const { texts, done } = useTypewriter(identity.taglines);

  return (
    <header className="relative flex min-h-svh flex-col">
      <nav className="fixed inset-x-0 top-0 z-10 border-b border-line/60 bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="font-mono text-sm font-bold text-green">
            ~/ankit
          </a>
          <div className="flex gap-4 font-mono text-xs text-muted sm:gap-6 sm:text-sm">
            {identity.nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-green">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div id="top" className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pt-24 sm:px-8">
        <p className="font-mono text-sm text-muted">{identity.prompt}</p>
        <h1 className="mt-4 font-mono text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          {identity.taglines.map((line, i) => (
            <span key={line} className="block">
              {texts[i].slice(0, -1)}
              {texts[i] && (
                <span className={ACCENTS[i % ACCENTS.length]}>{texts[i].slice(-1)}</span>
              )}
              {!done && texts[i] && !texts[i + 1] && (
                <span className="cursor-blink text-green">▊</span>
              )}
            </span>
          ))}
          {done && <span className="cursor-blink font-mono text-green">▊</span>}
        </h1>
        <p className="mt-8 font-mono text-xs text-green sm:text-sm">
          ▸{" "}
          {identity.chips.map((c, i) => (
            <span key={c}>
              {i > 0 && <span className="text-muted"> · </span>}
              {c}
            </span>
          ))}
        </p>
      </div>

      <RidgelineDivider />
    </header>
  );
}
