import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import type { NewsItem } from "@/api/mockData";

const NewsCard = ({ item }: { item: NewsItem }) => (
  <Link to={`/news/${item.id}`} className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-200 hover:shadow-md">
    <div className="aspect-video overflow-hidden">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" loading="lazy" />
    </div>
    <div className="p-4">
      <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{item.category}</span>
      <h3 className="mt-2 line-clamp-2 text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">{item.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
      </div>
    </div>
  </Link>
);

export default NewsCard;
