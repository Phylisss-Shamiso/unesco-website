import { Link } from "react-router-dom";
import { MapPin, CalendarDays } from "lucide-react";
import type { EventItem } from "@/api/mockData";

const EventCard = ({ item }: { item: EventItem }) => {
  const d = new Date(item.date);
  return (
    <Link to={`/events/${item.id}`} className="group flex gap-4 rounded-lg border border-border bg-card p-4 transition-shadow duration-200 hover:shadow-md">
      <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="text-xs font-medium uppercase">{d.toLocaleDateString("en-GB", { month: "short" })}</span>
        <span className="text-xl font-bold leading-none">{d.getDate()}</span>
      </div>
      <div className="min-w-0 flex-1">
        <span className="text-xs font-medium text-accent-foreground bg-accent/20 rounded px-1.5 py-0.5">{item.type}</span>
        <h3 className="mt-1 truncate text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">{item.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
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
