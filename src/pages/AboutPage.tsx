import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const tabs = ["Mandate", "Vision & Mission", "Organizational Structure", "Secretariat"];

const content: Record<string, React.ReactNode> = {
  Mandate: (
    <div className="prose max-w-none text-foreground">
      <p className="text-muted-foreground leading-relaxed">
        The Zimbabwe National Commission for UNESCO (ZNCU) was established under the UNESCO Constitution to serve as the national coordinating body linking the Government of Zimbabwe with UNESCO. The Commission facilitates the participation of educational, scientific, cultural, and communication institutions in UNESCO's programmes.
      </p>
      <h3 className="text-lg font-semibold mt-6 mb-2">Key Responsibilities</h3>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex gap-2"><span className="text-primary font-bold">•</span> Advise the government on UNESCO-related policy matters</li>
        <li className="flex gap-2"><span className="text-primary font-bold">•</span> Coordinate national participation in UNESCO programmes</li>
        <li className="flex gap-2"><span className="text-primary font-bold">•</span> Promote UNESCO ideals of peace, education, and cultural understanding</li>
        <li className="flex gap-2"><span className="text-primary font-bold">•</span> Disseminate UNESCO publications and information nationally</li>
        <li className="flex gap-2"><span className="text-primary font-bold">•</span> Nominate sites for World Heritage listing and manage existing sites</li>
      </ul>
    </div>
  ),
  "Vision & Mission": (
    <div className="space-y-8">
      <div className="rounded-lg border border-border bg-primary/5 p-6">
        <h3 className="text-lg font-bold text-primary mb-2">Our Vision</h3>
        <p className="text-muted-foreground leading-relaxed">
          A Zimbabwe where education, science, culture, and communication contribute to sustainable development and lasting peace for all citizens.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-primary/5 p-6">
        <h3 className="text-lg font-bold text-primary mb-2">Our Mission</h3>
        <p className="text-muted-foreground leading-relaxed">
          To advance the national implementation of UNESCO's programmes by fostering cooperation among educational, scientific, cultural, and media institutions towards the attainment of the Sustainable Development Goals.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Core Values</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {["Excellence", "Integrity", "Inclusivity", "Innovation", "Collaboration", "Transparency"].map((v) => (
            <div key={v} className="flex items-center gap-2 rounded border border-border p-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  "Organizational Structure": (
    <div className="text-muted-foreground leading-relaxed space-y-4">
      <p>The ZNCU operates under the following structure:</p>
      <div className="space-y-3">
        {[
          { role: "Chairperson", desc: "Appointed by the President of Zimbabwe" },
          { role: "Secretary General", desc: "Chief executive officer of the Commission" },
          { role: "Commission Members", desc: "Representatives from government ministries, academia, and civil society" },
          { role: "Programme Officers", desc: "Specialists for each UNESCO sector" },
          { role: "Administrative Staff", desc: "Supporting day-to-day operations" },
        ].map((item) => (
          <div key={item.role} className="flex gap-4 rounded-lg border border-border p-4">
            <div className="h-10 w-10 flex-shrink-0 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              {item.role[0]}
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{item.role}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  Secretariat: (
    <div className="text-muted-foreground leading-relaxed space-y-4">
      <p>
        The Secretariat serves as the operational arm of the Commission, responsible for implementing programmes, managing partnerships, and ensuring effective communication between Zimbabwe and UNESCO headquarters in Paris.
      </p>
      <div className="rounded-lg border border-border p-6">
        <h4 className="font-semibold text-foreground mb-3">Secretariat Functions</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2"><span className="text-accent font-bold">→</span> Programme coordination and implementation</li>
          <li className="flex gap-2"><span className="text-accent font-bold">→</span> Financial management and reporting</li>
          <li className="flex gap-2"><span className="text-accent font-bold">→</span> Stakeholder engagement and partnerships</li>
          <li className="flex gap-2"><span className="text-accent font-bold">→</span> Monitoring and evaluation of projects</li>
          <li className="flex gap-2"><span className="text-accent font-bold">→</span> Public relations and communications</li>
        </ul>
      </div>
    </div>
  ),
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Mandate");

  return (
    <div className="bg-background">
      {/* Page hero */}
      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">About Us</h1>
          <p className="mt-2 text-primary-foreground/70 max-w-xl">Learn about our mandate, vision, mission, and organizational structure.</p>
        </div>
      </div>

      <div className="container py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
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
