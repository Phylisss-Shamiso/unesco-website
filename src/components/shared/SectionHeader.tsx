interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => (
  <div className={`mb-8 ${centered ? "text-center" : ""}`}>
    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
    <div className="mt-2 h-1 w-12 rounded bg-accent" style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }} />
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl" style={{ marginLeft: centered ? "auto" : undefined, marginRight: centered ? "auto" : undefined }}>{subtitle}</p>}
  </div>
);

export default SectionHeader;
