import { useEffect, useRef } from "react";
import { X, Calendar, MapPin, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { newsItems, events, publications } from "@/api/mockData";
import type { NewsItem, EventItem, Publication } from "@/api/mockData";

interface InsightPanelProps {
  activePanel: "news" | "events" | "publications" | null;
  onClose: () => void;
}

const InsightPanel = ({ activePanel, onClose }: InsightPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (activePanel) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [activePanel, onClose]);

  if (!activePanel) return null;

  const titles: Record<string, string> = {
    news: "Latest Articles",
    events: "Upcoming Events",
    publications: "Publications & Resources",
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] insight-overlay animate-fade-in cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 z-[70] h-full w-full max-w-xl glass-panel-light shadow-2xl animate-slide-in-right overflow-hidden flex flex-col"
        role="dialog"
        aria-label={titles[activePanel]}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">{titles[activePanel]}</h2>
            <p className="text-xs text-muted-foreground mt-0.5 font-sans">Quick preview · Click items for details</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-destructive/10 hover:text-destructive transition-colors"
            aria-label="Close panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {activePanel === "news" && newsItems.map((item) => <NewsInsightCard key={item.id} item={item} />)}
          {activePanel === "events" && events.map((item) => <EventInsightCard key={item.id} item={item} />)}
          {activePanel === "publications" && publications.map((item) => <PublicationInsightCard key={item.id} item={item} />)}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/50 bg-muted/30">
          <Link
            to={`/${activePanel}`}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View All {titles[activePanel]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

const NewsInsightCard = ({ item }: { item: NewsItem }) => (
  <Link to={`/news/${item.id}`} className="group flex gap-4 rounded-xl border border-border/50 bg-card p-3 transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
    <div className="h-20 w-28 flex-shrink-0 rounded-lg overflow-hidden">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="flex-1 min-w-0">
      <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider">{item.category}</span>
      <h3 className="mt-1 text-sm font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors font-sans">{item.title}</h3>
      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{item.excerpt}</p>
      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-muted-foreground">
        <Calendar className="h-3 w-3" />
        <time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
      </div>
    </div>
  </Link>
);

const EventInsightCard = ({ item }: { item: EventItem }) => {
  const d = new Date(item.date);
  return (
    <Link to={`/events/${item.id}`} className="group flex gap-4 rounded-xl border border-border/50 bg-card p-3 transition-all hover:shadow-lg hover:border-accent/30 hover:-translate-y-0.5">
      <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
        <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{d.toLocaleDateString("en-GB", { month: "short" })}</span>
        <span className="text-2xl font-bold leading-none font-display">{d.getDate()}</span>
      </div>
      <div className="flex-1 min-w-0">
        <span className="inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-foreground uppercase tracking-wider">{item.type}</span>
        <h3 className="mt-1 text-sm font-semibold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors font-sans">{item.title}</h3>
        <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{item.location}</span>
        </div>
      </div>
    </Link>
  );
};

const PublicationInsightCard = ({ item }: { item: Publication }) => (
  <div className="group flex gap-4 rounded-xl border border-border/50 bg-card p-3 transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5">
    <div className="h-24 w-18 flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-muted relative">
      <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
      {/* Spine effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/20 to-transparent" />
    </div>
    <div className="flex-1 min-w-0">
      <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{item.category}</span>
      <h3 className="mt-1 text-sm font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors font-sans">{item.title}</h3>
      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{item.description}</p>
      <a
        href={item.fileUrl}
        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        <Download className="h-3 w-3" />
        Download {item.fileType}
      </a>
    </div>
  </div>
);

export default InsightPanel;
