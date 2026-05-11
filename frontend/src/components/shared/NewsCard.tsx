import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import type { NewsItem } from "@/api/mockData";

const NewsCard = ({ item }: { item: NewsItem }) => (
  <Link to={`/news/${item.id}`} className="group block overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
    <div className="aspect-video overflow-hidden">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
    </div>
    <div className="p-5">
      <span className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{item.category}</span>
      <h3 className="mt-2.5 line-clamp-2 font-display text-base font-bold text-card-foreground group-hover:text-primary transition-colors">{item.title}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
      <div className="mt-3.5 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
      </div>
    </div>
  </Link>
);

export default NewsCard;
