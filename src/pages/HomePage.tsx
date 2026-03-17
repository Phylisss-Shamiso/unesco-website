import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Microscope, Users, Landmark, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import EventCard from "@/components/shared/EventCard";
import { newsItems, events, sectors } from "@/api/mockData";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Microscope, Users, Landmark, Radio,
};

const HomePage = () => {
  const latestNews = newsItems.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1400&q=80')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block rounded bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground mb-4">
              Building Peace in the Minds of People
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight tracking-tight">
              Zimbabwe National Commission for UNESCO
            </h1>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Promoting education, science, culture, and communication for sustainable development and peace in Zimbabwe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/about">Learn About Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/programmes">Our Programmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-background py-16">
        <div className="container">
          <SectionHeader title="UNESCO Sectors" subtitle="Our five areas of expertise driving sustainable development." centered />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector) => {
              const Icon = iconMap[sector.icon] || GraduationCap;
              return (
                <Link
                  key={sector.id}
                  to={`/areas#${sector.slug}`}
                  className="group rounded-lg border border-border bg-card p-5 text-center transition-all duration-200 hover:shadow-md hover:border-primary/30"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-card-foreground">{sector.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{sector.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <SectionHeader title="Latest News & Announcements" />
            <Link to="/news" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => <NewsCard key={item.id} item={item} />)}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Button asChild variant="outline"><Link to="/news">View All News</Link></Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <SectionHeader title="Upcoming Events" />
            <Link to="/events" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((item) => <EventCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Stay Informed</h2>
          <p className="mt-2 text-primary-foreground/80 max-w-lg mx-auto">
            Subscribe to receive the latest news, events, and publications from the Zimbabwe National Commission for UNESCO.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-0 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
