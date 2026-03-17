import SectionHeader from "@/components/shared/SectionHeader";
import NewsCard from "@/components/shared/NewsCard";
import { newsItems } from "@/api/mockData";

const NewsPage = () => (
  <div className="bg-background">
    <div className="bg-primary py-12">
      <div className="container">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">News & Updates</h1>
        <p className="mt-2 text-primary-foreground/70 max-w-xl">Press releases, activity reports, and announcements.</p>
      </div>
    </div>
    <div className="container py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => <NewsCard key={item.id} item={item} />)}
      </div>
    </div>
  </div>
);

export default NewsPage;
