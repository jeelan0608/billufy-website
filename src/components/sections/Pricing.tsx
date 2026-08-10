import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing.</h2>
          <p className="text-lg text-muted-foreground">Start free, upgrade when you're ready to grow. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Trial Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-card border border-border flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free Trial</h3>
              <p className="text-muted-foreground">Perfect to test the waters.</p>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-black">$0</span>
              <span className="text-muted-foreground font-medium"> / for 3 months</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited Invoices",
                "Unlimited Products",
                "Basic Analytics",
                "Local Device Storage",
                "Email Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <Check size={18} className="text-foreground" /> {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl border-2 border-border font-bold hover:bg-muted transition-colors">
              Start Free Trial
            </button>
          </motion.div>

          {/* Premium Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-[2rem] bg-foreground text-background flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="mb-6 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Zap size={14} /> Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Pro</h3>
              <p className="text-background/70">For serious growing businesses.</p>
            </div>
            <div className="mb-6 relative z-10">
              <span className="text-5xl font-black">$19</span>
              <span className="text-background/70 font-medium"> / month</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              {[
                "Everything in Free",
                "Advanced AI Analytics",
                "Automatic Cloud Sync Backup",
                "Staff Account Access",
                "Priority 24/7 Support",
                "Remove Billufy Branding"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-background/90">
                  <Check size={18} className="text-primary" /> {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 relative z-10">
              Get Premium
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
