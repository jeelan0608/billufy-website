import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    business: "Boutique Cafe Owner",
    initials: "SJ",
    quote: "Billufy literally changed my life. I used to spend 2 hours every evening doing the math. Now I just check the app and go home.",
  },
  {
    name: "Omar Tariq",
    business: "Electronics Store",
    initials: "OT",
    quote: "The inventory alerts are a lifesaver. I never run out of my best-selling items anymore. My customers have noticed the difference.",
  },
  {
    name: "Elena Rodriguez",
    business: "Pharmacy Manager",
    initials: "ER",
    quote: "Creating digital invoices is so fast. We've completely stopped using paper receipts, saving money and looking much more professional.",
  },
  {
    name: "Michael Chen",
    business: "Hardware Supplier",
    initials: "MC",
    quote: "Managing customer credit used to be a nightmare. Billufy makes it perfectly clear who owes what. Paid for itself in a week.",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Don't just take our word for it.</h2>
          <p className="text-lg text-muted-foreground">Join thousands of business owners who have upgraded their operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-3xl flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-[#FFB800] mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-foreground leading-relaxed flex-1 mb-6 font-medium">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
