import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#FFB800] mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <div className="text-sm font-medium text-foreground">4.9/5 Average Rating</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block"></div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground font-medium">Uptime Guarantee</div>
            </div>
          </div>

          <div className="flex-1 w-full overflow-hidden">
            <div className="flex items-center justify-center sm:justify-between gap-8 flex-wrap opacity-40 hover:opacity-80 transition-all duration-500">
              {["QuickMart", "FreshGrocer", "MediPlus", "SpiceRoute", "TechHub"].map((brand) => (
                <span key={brand} className="text-lg font-bold tracking-tight text-foreground select-none">{brand}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
