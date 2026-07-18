import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import QrCode from "./QrCode.jsx";

describe("QrCode", () => {
  it("renders a scannable svg QR image for the given value", async () => {
    render(<QrCode value="https://example.com" label="this site" />);
    const img = await screen.findByAltText("QR code to this site");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toMatch(/^data:image\/svg\+xml/);
  });

  it("shows the scan label", async () => {
    render(<QrCode value="https://example.com" label="linkedin" />);
    await screen.findByAltText("QR code to linkedin");
    expect(screen.getByText(/scan for linkedin/)).toBeInTheDocument();
  });
});
