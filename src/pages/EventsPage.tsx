import EventCard from "@/components/shared/EventCard";
import { events } from "@/api/mockData";

const EventsPage = () => (
  <div className="bg-background">
    <div className="bg-primary py-12">
      <div className="container">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Events & Commemorations</h1>
        <p className="mt-2 text-primary-foreground/70 max-w-xl">Upcoming meetings, conferences, and international days.</p>
      </div>
    </div>
    <div className="container py-12">
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((item) => <EventCard key={item.id} item={item} />)}
      </div>
    </div>
  </div>
);

export default EventsPage;
