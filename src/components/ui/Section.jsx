import { motion, useReducedMotion } from "framer-motion";

export default function Section({ id, title, children, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <section id={id} className={`mx-auto max-w-5xl px-5 py-20 sm:px-8 ${className}`}>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="font-mono text-xl text-green sm:text-2xl">
          <span className="text-muted"># </span>
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
}
