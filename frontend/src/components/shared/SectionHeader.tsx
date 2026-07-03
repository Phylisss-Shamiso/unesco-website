interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => (
  <div className={`mb-8 ${centered ? "text-center" : ""}`}>
    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
    <div
      className="mt-3 h-0.5 w-14 rounded bg-gradient-to-r from-accent via-accent/60 to-transparent"
      style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }}
    />
    {subtitle && (
      <p
        className="mt-4 text-muted-foreground max-w-2xl leading-relaxed"
        style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
