import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { programmes } from "@/api/mockData";
import { Button } from "@/components/ui/button";

const filters = ["all", "ongoing", "completed", "upcoming"] as const;

const ProgrammesPage = () => {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? programmes : programmes.filter((p) => p.status === active);

  return (
    <div className="bg-background">
      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Programmes & Projects</h1>
          <p className="mt-2 text-primary-foreground/70 max-w-xl">Initiatives driving UNESCO's mission in Zimbabwe.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                active === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded px-2 py-0.5">{p.sector}</span>
                  <span className={`text-xs font-medium rounded px-2 py-0.5 ${
                    p.status === "ongoing" ? "bg-green-100 text-green-700" :
                    p.status === "completed" ? "bg-muted text-muted-foreground" :
                    "bg-accent/20 text-accent-foreground"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-card-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Started {new Date(p.startDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No programmes found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default ProgrammesPage;
