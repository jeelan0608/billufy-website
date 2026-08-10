import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why upgrade to Billufy?</h2>
          <p className="text-lg text-muted-foreground">It's time to leave the messy notebooks and complicated software behind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Traditional Way */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-muted/50 border border-border opacity-70"
          >
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Traditional Methods</h3>
            <ul className="space-y-4">
              {[
                "Writing manual receipts on paper",
                "Counting inventory by hand for hours",
                "Losing track of who owes you money",
                "Guessing your daily profits",
                "Data lost if book is damaged",
                "Looks unprofessional to customers"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-destructive/10 text-destructive rounded-full p-1">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Billufy Way */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative shadow-2xl shadow-primary/5"
          >
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transform rotate-12">
              The Future
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">With Billufy</h3>
            <ul className="space-y-4">
              {[
                "Digital invoices sent in seconds",
                "Auto-updated stock with low alerts",
                "Clear customer credit tracking",
                "Instant profit and loss reports",
                "Secure auto-cloud backup",
                "Premium brand experience for clients"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary text-primary-foreground rounded-full p-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full items-center justify-center font-bold text-muted-foreground z-10 shadow-lg">
            VS
          </div>
        </div>
      </div>
    </section>
  );
}
