import { useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { commemorations } from "@/api/mockData";

const CommemorationsPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = commemorations.find((c) => c.id === selectedId);

  return (
    <div>
      <PageHero title="UNESCO Commemorations" subtitle="International days and commemorations celebrated in Zimbabwe." />
      <div className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commemorations.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group text-left overflow-hidden rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-black/80">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">
                    {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-black group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="mt-1.5 text-sm text-black/60 line-clamp-2 leading-relaxed">{item.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg p-4" onClick={() => setSelectedId(null)}>
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white/12 backdrop-blur-2xl border border-white/20 shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden rounded-t-2xl relative">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 text-accent text-xs font-semibold mb-2">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {new Date(selected.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <h2 className="font-display text-2xl font-bold text-white">{selected.title}</h2>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">Background</h3>
                <p className="text-sm text-white/60 leading-relaxed">{selected.background}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">National Activities</h3>
                <ul className="space-y-2">
                  {selected.nationalActivities.map((activity) => (
                    <li key={activity} className="flex gap-3 text-sm text-white/60 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent/50 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="btn-brass px-6 py-2.5 rounded-lg text-sm font-semibold w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommemorationsPage;
