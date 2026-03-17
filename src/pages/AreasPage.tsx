import { GraduationCap, Microscope, Users, Landmark, Radio } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
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
    <div className="bg-primary py-12">
      <div className="container">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Areas of Competence</h1>
        <p className="mt-2 text-primary-foreground/70 max-w-xl">Explore the five programme sectors through which UNESCO delivers its mandate.</p>
      </div>
    </div>

    <div className="container py-12 space-y-12">
      {sectors.map((sector, i) => {
        const Icon = iconMap[sector.icon] || GraduationCap;
        const isEven = i % 2 === 0;
        return (
          <div key={sector.id} id={sector.slug} className="scroll-mt-24">
            <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">{sector.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{sector.description}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Focus Areas</h4>
                <ul className="space-y-2">
                  {(details[sector.slug] || []).map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="aspect-video rounded-lg bg-muted overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      ["1509062522246-3755977927d7", "1532094349884-543bc11b234d", "1529390079861-591de354faf5", "1489749798305-4fea3ae63d43", "1504711434969-e33886168d6c"][i]
                    }?w=600&q=80`}
                    alt={sector.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {i < sectors.length - 1 && <hr className="mt-12 border-border" />}
          </div>
        );
      })}
    </div>
  </div>
);

export default AreasPage;
