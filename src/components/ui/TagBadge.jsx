export default function TagBadge({ children, active = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-accent/40 bg-accent text-background"
          : "border-white/10 bg-white/[0.03] text-foreground"
      }`}
    >
      {children}
    </span>
  );
}
