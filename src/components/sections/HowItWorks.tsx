import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Download App", desc: "Available on Android and Web. Setup takes less than 2 minutes." },
  { num: "02", title: "Add Products", desc: "Quickly scan barcodes or add items manually with images and prices." },
  { num: "03", title: "Create Bills", desc: "Generate your first digital receipt and share it instantly." },
  { num: "04", title: "Grow Business", desc: "Monitor analytics and make data-driven decisions to scale up." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Up and running in minutes.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No complex training required. Billufy is designed to be intuitive so you can focus on selling, not learning software.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background border-4 border-card shadow-xl flex items-center justify-center text-3xl font-black text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all duration-300 relative z-10 mb-6">
                  {step.num}
                  <div className="absolute inset-0 rounded-full border border-primary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
