import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import Hero from "./Hero.jsx";

describe("Hero", () => {
  it("renders the whoami prompt and types out both taglines", () => {
    vi.useFakeTimers();
    render(<Hero />);
    expect(screen.getByText("$ whoami")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(8000);
    });
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("backend engineer.");
    expect(heading.textContent).toContain("mountain person.");
    vi.useRealTimers();
  });

  it("renders nav anchors to all sections", () => {
    render(<Hero />);
    for (const href of ["#about", "#journeys", "#projects", "#experience", "#contact"]) {
      expect(document.querySelector(`nav a[href='${href}']`)).toBeInTheDocument();
    }
  });

  it("renders identity chips", () => {
    render(<Hero />);
    expect(screen.getByText("python")).toBeInTheDocument();
    expect(screen.getByText("12000 ft")).toBeInTheDocument();
  });
});
