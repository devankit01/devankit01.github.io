import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Section from "./Section.jsx";
import TerminalCard from "./TerminalCard.jsx";
import RidgelineDivider from "./RidgelineDivider.jsx";

describe("Section", () => {
  it("renders a section element with id and prompt-prefixed heading", () => {
    render(
      <Section id="journeys" title="journeys">
        <p>body</p>
      </Section>
    );
    const section = document.querySelector("section#journeys");
    expect(section).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("# journeys");
    expect(screen.getByText("body")).toBeInTheDocument();
  });
});

describe("TerminalCard", () => {
  it("renders a title bar and children", () => {
    render(<TerminalCard title="~/projects/careerboat">inner</TerminalCard>);
    expect(screen.getByText("~/projects/careerboat")).toBeInTheDocument();
    expect(screen.getByText("inner")).toBeInTheDocument();
  });
});

describe("RidgelineDivider", () => {
  it("renders an svg", () => {
    const { container } = render(<RidgelineDivider />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

