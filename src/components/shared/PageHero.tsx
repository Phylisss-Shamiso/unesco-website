interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <div className="relative overflow-hidden">
    {/* Brushed metal base */}
    <div className="absolute inset-0 brushed-metal" />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
    {/* Vignette */}
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(0,0,0,0.15) 100%)" }}
    />
    <div className="container relative z-10 py-16 md:py-20">
      <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground text-chiseled tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-primary-foreground/70 max-w-xl text-base md:text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Gold accent line */}
      <div className="mt-5 h-0.5 w-16 rounded bg-gradient-to-r from-accent via-accent/60 to-transparent" />
    </div>
    {/* Bottom fade into content */}
    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent" />
  </div>
);

export default PageHero;
