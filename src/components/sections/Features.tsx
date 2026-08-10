import { motion } from "framer-motion";
import { Receipt, Package, Users, BarChart3, Wallet, FileText, Gift, Cloud } from "lucide-react";

const features = [
  { icon: Receipt, title: "Billing", desc: "Create professional invoices in seconds. Send via WhatsApp, email or SMS." },
  { icon: Package, title: "Inventory", desc: "Automatic stock updates. Get low stock alerts before you run out." },
  { icon: Users, title: "Customers", desc: "Track customer purchases, manage credit, and build loyalty easily." },
  { icon: BarChart3, title: "Analytics", desc: "Real-time business insights. Know your best selling items instantly." },
  { icon: Wallet, title: "Expenses", desc: "Monitor daily spending and keep your cash flow healthy and organized." },
  { icon: FileText, title: "Reports", desc: "Generate daily, weekly, or monthly profit and loss statements in one click." },
  { icon: Gift, title: "3 Months Free", desc: "Experience the full power of Premium completely free for your first 3 months." },
  { icon: Cloud, title: "Cloud Backup", desc: "Bank-level security. Your data is auto-synced so you never lose a thing." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need, <br className="hidden md:block"/> nothing you don't.</h2>
          <p className="text-lg text-muted-foreground">Replace your notebook and clunky software. Billufy gives you the tools to manage every aspect of your business smoothly.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group glow-effect"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
