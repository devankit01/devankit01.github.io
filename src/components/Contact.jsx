import { contact, identity, siteUrl } from "../data/content.js";
import Section from "./ui/Section.jsx";
import QrCode from "./ui/QrCode.jsx";

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
      <div className="mt-14 flex flex-wrap gap-10 border-t border-line pt-10">
        <QrCode value={siteUrl} label="this site" />
        <QrCode
          value={contact.find((c) => c.service === "linkedin").href}
          label="linkedin"
        />
      </div>

      <p className="mt-10 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {identity.name} · built with react, coffee, and thin air
      </p>
    </Section>
  );
}
