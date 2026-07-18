export default function RidgelineDivider({ flip = false }) {
  return (
    <div aria-hidden="true" className="mx-auto max-w-6xl overflow-hidden px-2">
      <svg
        viewBox="0 0 800 70"
        preserveAspectRatio="none"
        className={`h-14 w-full opacity-70 ${flip ? "scale-x-[-1]" : ""}`}
      >
        <path
          d="M0 70 L90 26 L160 52 L260 8 L350 46 L470 18 L560 44 L660 12 L740 38 L800 24"
          fill="none"
          stroke="var(--color-green)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M0 70 L90 26 L160 52 L260 8 L350 46 L470 18 L560 44 L660 12 L740 38 L800 24 L800 70 Z"
          fill="var(--color-green)"
          fillOpacity="0.07"
        />
      </svg>
    </div>
  );
}
