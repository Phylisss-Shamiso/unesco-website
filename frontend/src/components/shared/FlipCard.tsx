import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";

interface FlipCardProps {
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin: string;
  image: string;
}

const FlipCard = ({ name, role, bio, email, linkedin, image }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "320px",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-48 overflow-hidden">
            <img src={image} alt={name} className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <div className="p-5 relative">
            <h3 className="font-display text-lg font-bold text-black">{name}</h3>
            <p className="text-sm text-black/60 mt-1">{role}</p>
            <div className="absolute bottom-4 right-4">
              <span className="text-[10px] text-black/30 uppercase tracking-wider">Click to flip</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white/12 backdrop-blur-xl border border-white/20 shadow-xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="font-display text-lg font-bold text-black mb-1">{name}</h3>
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-4">{role}</p>
            <p className="text-sm text-black/70 leading-relaxed">{bio}</p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <a
              href={`mailto:${email}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-xs font-semibold text-black hover:bg-primary/30 hover:border-primary/40 transition-all"
            >
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/10 border border-white/20 text-black hover:bg-[#0077B5]/30 hover:border-[#0077B5]/40 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
