import { useState } from "react";
import { X } from "lucide-react";
import { mediaItems } from "@/api/mockData";

const MediaPage = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = mediaItems.find((m) => m.id === selected);

  return (
    <div className="bg-background">
      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Media Gallery</h1>
          <p className="mt-2 text-primary-foreground/70 max-w-xl">Photos and videos from our events and activities.</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {mediaItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="w-full overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md break-inside-avoid block text-left"
            >
              <img src={item.thumbnail} alt={item.title} className="w-full object-cover" loading="lazy" />
              <div className="p-3">
                <h3 className="text-sm font-medium text-card-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.event} · {new Date(item.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4" onClick={() => setSelected(null)}>
          <div className="relative max-w-4xl w-full animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute -top-10 right-0 text-primary-foreground hover:text-accent" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <img src={selectedItem.url} alt={selectedItem.title} className="w-full rounded-lg" />
            <div className="mt-2 text-center">
              <p className="text-sm font-medium text-primary-foreground">{selectedItem.title}</p>
              <p className="text-xs text-primary-foreground/70">{selectedItem.event}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;
