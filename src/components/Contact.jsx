import { contact, identity } from "../data/content.js";
import Section from "./ui/Section.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="contact">
      <ul className="space-y-4 font-mono text-sm sm:text-base">
        {contact.map((c) => {
          const external = !c.href.startsWith("mailto:");
          return (
            <li key={c.service}>
              <span className="text-muted">$ open </span>
              <a
                href={c.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-green underline-offset-4 hover:underline"
              >
                {c.service}
                <span className="text-muted">/</span>
                {c.label}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-16 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {identity.name} · built with react, coffee, and thin air
      </p>
    </Section>
  );
}
