import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";
import { publications } from "@/api/mockData";

const categories = ["All", ...Array.from(new Set(publications.map((p) => p.category)))];

const PublicationsPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? publications : publications.filter((p) => p.category === active);

  return (
    <div className="bg-background">
      <PageHero title="Publications & Resources" subtitle="Browse and download reports, policy briefs, and guidelines." />
      <div className="container py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                active === c ? "btn-brass shadow-md" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {filtered.map((pub) => (
            <div key={pub.id} className="flex flex-col sm:flex-row gap-5 rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/20 group">
              <div className="w-full sm:w-32 flex-shrink-0">
                <div className="aspect-[3/4] rounded-lg bg-muted overflow-hidden shadow-md">
                  <img src={pub.thumbnail} alt={pub.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-md px-2.5 py-1">{pub.category}</span>
                <h3 className="mt-2.5 text-base font-display font-bold text-card-foreground">{pub.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{new Date(pub.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><FileText className="h-3 w-3" />{pub.fileType}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 gap-1.5 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Download className="h-3.5 w-3.5" /> Download PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
