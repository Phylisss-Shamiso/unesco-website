import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Microscope, Users, Landmark, Radio, Newspaper, CalendarDays, BookOpen } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import EventCard from "@/components/shared/EventCard";
import InsightPanel from "@/components/shared/InsightPanel";
import { newsItems, events, sectors } from "@/api/mockData";
import heroImage from "@/assets/hero-zimbabwe.jpg";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Microscope, Users, Landmark, Radio,
};

const HomePage = () => {
  const latestNews = newsItems.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const [activePanel, setActivePanel] = useState<"news" | "events" | "publications" | null>(null);

  return (
    <div>
      {/* Cinematic Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background with Ken Burns */}
        <div
          className="absolute inset-0 animate-ken-burns"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)"
        }} />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full btn-brass px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
              Building Peace in the Minds of People
            </span>

            {/* Hero headline — chiseled serif */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-chiseled">
              Zimbabwe National<br className="hidden sm:block" /> Commission for{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text" }}>
                UNESCO
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-xl font-light">
              Promoting education, science, culture, and communication for sustainable development and lasting peace in Zimbabwe.
            </p>

            {/* CTA Buttons — premium materials */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="btn-brass inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide"
              >
                Learn About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programmes"
                className="btn-frosted inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide"
              >
                Our Programmes
              </Link>
            </div>

            {/* Quick panel triggers */}
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                { key: "news" as const, icon: Newspaper, label: "Latest News" },
                { key: "events" as const, icon: CalendarDays, label: "Events" },
                { key: "publications" as const, icon: BookOpen, label: "Publications" },
              ].map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => setActivePanel(key)}
                  className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all duration-300 group"
                >
                  <Icon className="h-3.5 w-3.5 text-accent group-hover:scale-110 transition-transform" />
                  {label}
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Sectors */}
      <section className="bg-background py-20 relative">
        <div className="container">
          <SectionHeader title="UNESCO Sectors" subtitle="Our five areas of expertise driving sustainable development across Zimbabwe." centered />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 mt-2">
            {sectors.map((sector) => {
              const Icon = iconMap[sector.icon] || GraduationCap;
              return (
                <Link
                  key={sector.id}
                  to={`/areas#${sector.slug}`}
                  className="group relative rounded-xl border border-border/60 bg-card p-6 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-card-foreground font-display">{sector.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">{sector.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader title="Latest News & Announcements" />
            <Link to="/news" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
              View all <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => <NewsCard key={item.id} item={item} />)}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              View All News <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader title="Upcoming Events" />
            <Link to="/events" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
              View all <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((item) => <EventCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 brushed-metal" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-chiseled">Stay Informed</h2>
          <p className="mt-3 text-primary-foreground/75 max-w-lg mx-auto leading-relaxed">
            Subscribe to receive the latest news, events, and publications from the Zimbabwe National Commission for UNESCO.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-0 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="btn-brass px-6 py-3 rounded-lg text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Insight Panel */}
      <InsightPanel activePanel={activePanel} onClose={() => setActivePanel(null)} />
    </div>
  );
};

export default HomePage;
