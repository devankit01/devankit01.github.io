import "@testing-library/jest-dom/vitest";

// framer-motion's whileInView relies on IntersectionObserver, absent in jsdom
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = MockIntersectionObserver;

if (!globalThis.matchMedia) {
  globalThis.matchMedia = () => ({
    matches: false,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  });
}
