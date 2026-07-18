import { describe, it, expect } from "vitest";
import { identity, about, trails, projects, experience, contact } from "./content.js";

describe("content", () => {
  it("has identity with name, tagline parts, and chips", () => {
    expect(identity.name).toBe("Ankit Gupta");
    expect(identity.taglines.length).toBeGreaterThanOrEqual(2);
    expect(identity.chips.length).toBeGreaterThanOrEqual(4);
  });

  it("has an about story and exactly 4 stats", () => {
    expect(about.story.length).toBeGreaterThan(100);
    expect(about.stats).toHaveLength(4);
    for (const s of about.stats) {
      expect(s).toHaveProperty("flag");
      expect(s).toHaveProperty("value");
    }
  });

  it("has 5 hiking trails with date, spot, country, image, and xp", () => {
    expect(trails).toHaveLength(5);
    for (const t of trails) {
      expect(t.src).toMatch(/^insta\/.+\.jpg$/);
      expect(t.date).toBeTruthy();
      expect(t.spot).toBeTruthy();
      expect(t.country).toBeTruthy();
      expect(t.flag).toBeTruthy();
      expect(t.xp).toBeGreaterThan(0);
    }
    expect(trails.map((t) => t.src)).toContain("insta/chandrashila-peak.jpg");
  });

  it("has 3 projects with name, desc, stack", () => {
    expect(projects).toHaveLength(3);
    for (const p of projects) {
      expect(p.name).toBeTruthy();
      expect(p.desc).toBeTruthy();
      expect(p.stack.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("has 4 experience entries newest-first with git-log fields", () => {
    expect(experience).toHaveLength(4);
    expect(experience[0].org).toMatch(/clear\.bio/i);
    for (const e of experience) {
      expect(e.hash).toMatch(/^[0-9a-f]{7}$/);
      expect(e.role).toBeTruthy();
      expect(e.period).toBeTruthy();
      expect(e.points.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("has 4 contact links with valid hrefs", () => {
    expect(contact).toHaveLength(4);
    const services = contact.map((c) => c.service);
    expect(services).toEqual(
      expect.arrayContaining(["email", "linkedin", "github", "instagram"])
    );
    expect(contact.find((c) => c.service === "email").href).toMatch(/^mailto:/);
  });
});
