import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background">
      <PageHero title="Contact Us" subtitle="Get in touch with the Zimbabwe National Commission for UNESCO." />
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "16 Cork Road, Belgravia\nHarare, Zimbabwe" },
                { icon: Phone, label: "Phone", value: "+263 242 790 741" },
                { icon: Mail, label: "Email", value: "info@unesco.org.zw" },
                { icon: Clock, label: "Office Hours", value: "Monday - Friday: 08:00 - 16:30" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl border border-border/60 p-5 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex-shrink-0 shadow-md">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-xl bg-muted border border-border/60 flex items-center justify-center text-muted-foreground text-sm shadow-inner">
              Interactive Map Placeholder — Integrate Google Maps or Leaflet
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            {submitted ? (
              <div className="rounded-xl border border-border/60 bg-card p-10 text-center animate-fade-in shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground mb-5 shadow-lg">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thank you for reaching out. We'll respond within 2-3 business days.</p>
                <Button variant="outline" className="mt-6 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                    <input required className="w-full rounded-lg border border-border/60 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Email *</label>
                    <input type="email" required className="w-full rounded-lg border border-border/60 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Subject *</label>
                  <input required className="w-full rounded-lg border border-border/60 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message *</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-border/60 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all resize-none" />
                </div>
                <button type="submit" className="btn-brass inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide w-full sm:w-auto justify-center">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
