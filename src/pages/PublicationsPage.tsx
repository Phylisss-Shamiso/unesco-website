import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publications } from "@/api/mockData";

const categories = ["All", ...Array.from(new Set(publications.map((p) => p.category)))];

const PublicationsPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? publications : publications.filter((p) => p.category === active);

  return (
    <div className="bg-background">
      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Publications & Resources</h1>
          <p className="mt-2 text-primary-foreground/70 max-w-xl">Browse and download reports, policy briefs, and guidelines.</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((pub) => (
            <div key={pub.id} className="flex flex-col sm:flex-row gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-sm">
              <div className="w-full sm:w-32 flex-shrink-0">
                <div className="aspect-[3/4] rounded bg-muted overflow-hidden">
                  <img src={pub.thumbnail} alt={pub.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-primary bg-primary/10 rounded px-2 py-0.5">{pub.category}</span>
                <h3 className="mt-2 text-base font-semibold text-card-foreground">{pub.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pub.description}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{new Date(pub.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><FileText className="h-3 w-3" />{pub.fileType}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-3 gap-1.5">
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
