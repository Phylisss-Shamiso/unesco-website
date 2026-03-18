import PageHero from "@/components/shared/PageHero";
import EventCard from "@/components/shared/EventCard";
import { events } from "@/api/mockData";

const EventsPage = () => (
  <div className="bg-background">
    <PageHero title="Events & Commemorations" subtitle="Upcoming meetings, conferences, and international days." />
    <div className="container py-12">
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((item) => <EventCard key={item.id} item={item} />)}
      </div>
    </div>
  </div>
);

export default EventsPage;
