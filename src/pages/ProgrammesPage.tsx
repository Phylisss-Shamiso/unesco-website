import { useState } from "react";
import { Calendar } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { programmes } from "@/api/mockData";

const filters = ["all", "ongoing", "completed", "upcoming"] as const;

const ProgrammesPage = () => {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? programmes : programmes.filter((p) => p.status === active);

  return (
    <div className="bg-background">
      <PageHero title="Programmes & Projects" subtitle="Initiatives driving UNESCO's mission in Zimbabwe." />

      <div className="container py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-300 ${
                active === f ? "btn-brass shadow-md" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 rounded-md px-2.5 py-1">{p.sector}</span>
                  <span className={`text-xs font-semibold rounded-md px-2.5 py-1 ${
                    p.status === "ongoing" ? "bg-green-100 text-green-700" :
                    p.status === "completed" ? "bg-muted text-muted-foreground" :
                    "bg-accent/20 text-accent-foreground"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold text-card-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{p.description}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Started {new Date(p.startDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16 font-display text-lg">No programmes found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default ProgrammesPage;
