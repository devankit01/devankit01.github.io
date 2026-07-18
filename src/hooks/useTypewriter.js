import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Types out `strings` sequentially, one character at a time.
 * Returns { texts, done }. Under prefers-reduced-motion, returns
 * the full strings immediately.
 */
export default function useTypewriter(strings, speed = 55, startDelay = 400) {
  const reduced = useReducedMotion();
  const [state, setState] = useState(() =>
    reduced
      ? { texts: [...strings], done: true }
      : { texts: strings.map(() => ""), done: false }
  );

  useEffect(() => {
    if (reduced) return undefined;
    let line = 0;
    let char = 0;
    let timer = setTimeout(tick, startDelay);

    function tick() {
      if (line >= strings.length) return;
      char += 1;
      const texts = strings.map((s, i) =>
        i < line ? s : i === line ? s.slice(0, char) : ""
      );
      const lineDone = char >= strings[line].length;
      if (lineDone) {
        line += 1;
        char = 0;
      }
      const done = line >= strings.length;
      setState({ texts, done });
      if (!done) timer = setTimeout(tick, lineDone ? speed * 6 : speed);
    }

    return () => clearTimeout(timer);
    // strings is expected to be a stable module-level constant
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return state;
}
