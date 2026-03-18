import { useState } from "react";
import PageHero from "@/components/shared/PageHero";

const tabs = ["Mandate", "Vision & Mission", "Organizational Structure", "Secretariat"];

const content: Record<string, React.ReactNode> = {
  Mandate: (
    <div className="prose max-w-none text-foreground">
      <p className="text-muted-foreground leading-relaxed text-base">
        The Zimbabwe National Commission for UNESCO (ZNCU) was established under the UNESCO Constitution to serve as the national coordinating body linking the Government of Zimbabwe with UNESCO. The Commission facilitates the participation of educational, scientific, cultural, and communication institutions in UNESCO's programmes.
      </p>
      <h3 className="font-display text-xl font-semibold mt-8 mb-3 text-foreground">Key Responsibilities</h3>
      <ul className="space-y-3 text-muted-foreground">
        {[
          "Advise the government on UNESCO-related policy matters",
          "Coordinate national participation in UNESCO programmes",
          "Promote UNESCO ideals of peace, education, and cultural understanding",
          "Disseminate UNESCO publications and information nationally",
          "Nominate sites for World Heritage listing and manage existing sites",
        ].map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent/60 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  ),
  "Vision & Mission": (
    <div className="space-y-8">
      <div className="relative rounded-xl overflow-hidden border border-border/60 p-8 glass-panel-light">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        <h3 className="font-display text-xl font-bold text-primary mb-3">Our Vision</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Zimbabwe where education, science, culture, and communication contribute to sustainable development and lasting peace for all citizens.
        </p>
      </div>
      <div className="relative rounded-xl overflow-hidden border border-border/60 p-8 glass-panel-light">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
        <h3 className="font-display text-xl font-bold text-primary mb-3">Our Mission</h3>
        <p className="text-muted-foreground leading-relaxed">
          To advance the national implementation of UNESCO's programmes by fostering cooperation among educational, scientific, cultural, and media institutions towards the attainment of the Sustainable Development Goals.
        </p>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Core Values</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {["Excellence", "Integrity", "Inclusivity", "Innovation", "Collaboration", "Transparency"].map((v) => (
            <div key={v} className="flex items-center gap-3 rounded-xl border border-border/60 p-4 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="h-3 w-3 rounded-full bg-gradient-to-br from-accent to-accent/50 shadow-sm" />
              <span className="text-sm font-semibold text-foreground">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  "Organizational Structure": (
    <div className="text-muted-foreground leading-relaxed space-y-5">
      <p>The ZNCU operates under the following structure:</p>
      <div className="space-y-3">
        {[
          { role: "Chairperson", desc: "Appointed by the President of Zimbabwe" },
          { role: "Secretary General", desc: "Chief executive officer of the Commission" },
          { role: "Commission Members", desc: "Representatives from government ministries, academia, and civil society" },
          { role: "Programme Officers", desc: "Specialists for each UNESCO sector" },
          { role: "Administrative Staff", desc: "Supporting day-to-day operations" },
        ].map((item) => (
          <div key={item.role} className="flex gap-4 rounded-xl border border-border/60 p-5 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-display font-bold text-lg shadow-md">
              {item.role[0]}
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">{item.role}</h4>
              <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  Secretariat: (
    <div className="text-muted-foreground leading-relaxed space-y-6">
      <p className="text-base">
        The Secretariat serves as the operational arm of the Commission, responsible for implementing programmes, managing partnerships, and ensuring effective communication between Zimbabwe and UNESCO headquarters in Paris.
      </p>
      <div className="relative rounded-xl border border-border/60 p-8 bg-card overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
        <h4 className="font-display font-semibold text-foreground mb-4 text-lg">Secretariat Functions</h4>
        <ul className="space-y-3 text-sm">
          {[
            "Programme coordination and implementation",
            "Financial management and reporting",
            "Stakeholder engagement and partnerships",
            "Monitoring and evaluation of projects",
            "Public relations and communications",
          ].map((fn) => (
            <li key={fn} className="flex gap-3 items-center">
              <span className="text-accent font-bold">→</span>
              <span>{fn}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Mandate");

  return (
    <div className="bg-background">
      <PageHero title="About Us" subtitle="Learn about our mandate, vision, mission, and organizational structure." />

      <div className="container py-12">
        {/* Tabs — premium pill style */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border/40 pb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "btn-brass shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="animate-fade-in" key={activeTab}>
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
