import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "./About.jsx";
import Journeys from "./Journeys.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";
import { photos, projects, experience, contact } from "../data/content.js";

describe("About", () => {
  it("renders the story and all 4 stat flags", () => {
    render(<About />);
    expect(screen.getByText(/Clear\.bio/)).toBeInTheDocument();
    expect(screen.getByText("--countries")).toBeInTheDocument();
    expect(screen.getByText("--highest-trek")).toBeInTheDocument();
    expect(screen.getByText("--hackathons")).toBeInTheDocument();
    expect(screen.getByText("--dutch")).toBeInTheDocument();
  });
});

describe("Journeys", () => {
  it("renders one figure per photo and links to instagram", () => {
    const { container } = render(<Journeys />);
    expect(container.querySelectorAll("figure")).toHaveLength(photos.length);
    const ig = container.querySelector("a[href*='instagram.com/ankit.codes']");
    expect(ig).toBeInTheDocument();
  });
});

describe("Projects", () => {
  it("renders a card per project with stack tags", () => {
    render(<Projects />);
    for (const p of projects) {
      expect(screen.getByText(`~/projects/${p.name}`)).toBeInTheDocument();
    }
    expect(screen.getAllByText("python").length).toBeGreaterThanOrEqual(2);
  });
});

describe("Experience", () => {
  it("renders all roles newest-first with hash markers", () => {
    const { container } = render(<Experience />);
    const hashes = [...container.querySelectorAll("[data-hash]")].map(
      (el) => el.dataset.hash
    );
    expect(hashes).toEqual(experience.map((e) => e.hash));
    expect(screen.getByText(/backend-engineer/)).toBeInTheDocument();
    expect(screen.getByText(/clear\.bio/)).toBeInTheDocument();
  });
});

describe("Contact", () => {
  it("renders all 4 links with safe rel and correct hrefs", () => {
    const { container } = render(<Contact />);
    for (const c of contact) {
      const a = container.querySelector(`a[href='${c.href}']`);
      expect(a).toBeInTheDocument();
      if (!c.href.startsWith("mailto:")) {
        expect(a).toHaveAttribute("rel", "noopener noreferrer");
        expect(a).toHaveAttribute("target", "_blank");
      }
    }
  });
});
