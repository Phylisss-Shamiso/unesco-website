import PageHero from "@/components/shared/PageHero";
import NewsCard from "@/components/shared/NewsCard";
import { newsItems } from "@/api/mockData";

const NewsPage = () => (
  <div className="bg-background">
    <PageHero title="News & Updates" subtitle="Press releases, activity reports, and announcements." />
    <div className="container py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => <NewsCard key={item.id} item={item} />)}
      </div>
    </div>
  </div>
);

export default NewsPage;
