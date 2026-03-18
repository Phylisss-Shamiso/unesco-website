import { GraduationCap, Microscope, Users, Landmark, Radio } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { sectors } from "@/api/mockData";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Microscope, Users, Landmark, Radio,
};

const details: Record<string, string[]> = {
  education: [
    "Implementation of SDG 4 and Education 2030 Framework",
    "Teacher training and professional development programmes",
    "Literacy campaigns and adult education initiatives",
    "Higher education quality assurance and accreditation",
    "Technical and vocational education and training (TVET)",
  ],
  "natural-sciences": [
    "Climate change adaptation and environmental sustainability",
    "Biosphere reserves and ecological research",
    "Water resource management and hydrology",
    "STEM education and youth innovation programmes",
    "Biodiversity conservation initiatives",
  ],
  "social-human-sciences": [
    "Human rights education and awareness",
    "Social inclusion policy research",
    "Youth engagement and empowerment programmes",
    "Ethics and governance frameworks",
    "Gender equality and women's empowerment",
  ],
  culture: [
    "World Heritage Site nominations and management",
    "Intangible Cultural Heritage safeguarding",
    "Creative industries development",
    "Cultural policy and legislative frameworks",
    "Museums and cultural institutions support",
  ],
  "communication-information": [
    "Press freedom advocacy and monitoring",
    "Media literacy and digital skills training",
    "Access to information initiatives",
    "Community media development",
    "Digital transformation strategies",
  ],
};

const AreasPage = () => (
  <div className="bg-background">
    <PageHero title="Areas of Competence" subtitle="Explore the five programme sectors through which UNESCO delivers its mandate." />

    <div className="container py-12 space-y-16">
      {sectors.map((sector, i) => {
        const Icon = iconMap[sector.icon] || GraduationCap;
        const isEven = i % 2 === 0;
        return (
          <div key={sector.id} id={sector.slug} className="scroll-mt-24">
            <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-start`}>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{sector.title}</h2>
                </div>
                <p className="text-muted-foreground mb-5 leading-relaxed">{sector.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Focus Areas</h4>
                <ul className="space-y-2.5">
                  {(details[sector.slug] || []).map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-muted-foreground items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent/50 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-border/40 group">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      ["1509062522246-3755977927d7", "1532094349884-543bc11b234d", "1529390079861-591de354faf5", "1489749798305-4fea3ae63d43", "1504711434969-e33886168d6c"][i]
                    }?w=600&q=80`}
                    alt={sector.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {i < sectors.length - 1 && <hr className="mt-16 border-border/40" />}
          </div>
        );
      })}
    </div>
  </div>
);

export default AreasPage;
