import { useState } from "react";
import { X } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { mediaItems } from "@/api/mockData";

const MediaPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = mediaItems.find((m) => m.id === selected);

  return (
    <div className="bg-background">
      <PageHero title="Media Gallery" subtitle="Photos and videos from our events and activities." />
      <div className="container py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {mediaItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="w-full overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 break-inside-avoid block text-left group"
            >
              <div className="overflow-hidden">
                <img src={item.thumbnail} alt={item.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-card-foreground font-display">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.event} · {new Date(item.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Premium Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center insight-overlay p-4" onClick={() => setSelected(null)}>
          <div className="relative max-w-4xl w-full animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute -top-12 right-0 glass-panel rounded-full p-2 text-primary-foreground hover:bg-white/20 transition-colors" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img src={selectedItem.url} alt={selectedItem.title} className="w-full" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-display font-semibold text-primary-foreground">{selectedItem.title}</p>
              <p className="text-xs text-primary-foreground/60 mt-0.5">{selectedItem.event}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;
