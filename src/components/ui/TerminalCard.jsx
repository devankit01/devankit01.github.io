export default function TerminalCard({ title, children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-panel ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}
