import { Link } from "react-router-dom";
import { MapPin, CalendarDays } from "lucide-react";
import type { EventItem } from "@/api/mockData";

const EventCard = ({ item }: { item: EventItem }) => {
  const d = new Date(item.date);
  return (
    <Link to={`/events/${item.id}`} className="group flex gap-5 rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      <div className="flex h-18 w-18 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md px-3 py-2">
        <span className="text-xs font-medium uppercase tracking-wider">{d.toLocaleDateString("en-GB", { month: "short" })}</span>
        <span className="text-2xl font-bold leading-none font-display">{d.getDate()}</span>
      </div>
      <div className="min-w-0 flex-1">
        <span className="text-xs font-semibold text-accent-foreground bg-accent/20 rounded-md px-2 py-0.5">{item.type}</span>
        <h3 className="mt-1.5 truncate font-display text-sm font-bold text-card-foreground group-hover:text-primary transition-colors">{item.title}</h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{item.location}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3 w-3" />
          <time dateTime={item.date}>{d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
