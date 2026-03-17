import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background">
      <div className="bg-primary py-12">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="mt-2 text-primary-foreground/70 max-w-xl">Get in touch with the Zimbabwe National Commission for UNESCO.</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "16 Cork Road, Belgravia\nHarare, Zimbabwe" },
                { icon: Phone, label: "Phone", value: "+263 242 790 741" },
                { icon: Mail, label: "Email", value: "info@unesco.org.zw" },
                { icon: Clock, label: "Office Hours", value: "Monday - Friday: 08:00 - 16:30" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 rounded-lg border border-border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground text-sm">
              Interactive Map Placeholder — Integrate Google Maps or Leaflet
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
            {submitted ? (
              <div className="rounded-lg border border-border bg-primary/5 p-8 text-center animate-fade-in">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground">Message Sent!</h3>
                <p className="mt-1 text-sm text-muted-foreground">Thank you for reaching out. We'll respond within 2-3 business days.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                    <input required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                    <input type="email" required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject *</label>
                  <input required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
