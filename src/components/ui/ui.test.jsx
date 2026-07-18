import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Section from "./Section.jsx";
import TerminalCard from "./TerminalCard.jsx";
import RidgelineDivider from "./RidgelineDivider.jsx";
import DuotonePhoto from "./DuotonePhoto.jsx";

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

describe("DuotonePhoto", () => {
  it("renders an image with its caption", () => {
    render(<DuotonePhoto src="insta/oslo.jpg" caption="📍Oslo, Norway" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", expect.stringContaining("insta/oslo.jpg"));
    expect(screen.getByText(/Oslo, Norway/)).toBeInTheDocument();
  });

  it("falls back to a placeholder when the image errors", () => {
    render(<DuotonePhoto src="insta/broken.jpg" caption="📍Nowhere" />);
    fireEvent.error(screen.getByRole("img"));
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByTestId("photo-fallback")).toBeInTheDocument();
    expect(screen.getByText(/Nowhere/)).toBeInTheDocument();
  });
});
