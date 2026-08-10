import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Billufy 2.0 is now live
            </motion.div>
            
            <motion.div variants={item}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                Run Your Business <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Smarter</span> with Billufy.
              </h1>
            </motion.div>

            <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
              Create invoices, manage inventory, track customers, monitor profits, and grow your business—all from one beautiful app.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-[0_0_40px_-10px_var(--color-primary)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                Download App <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 dark:bg-black/5 backdrop-blur-md border border-border text-foreground font-semibold rounded-full hover:bg-muted transition-all flex items-center justify-center gap-2 group">
                <PlayCircle size={18} className="group-hover:text-primary transition-colors" /> Watch Demo
              </button>
            </motion.div>
            
            <motion.div variants={item} className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>Joined by 1,000+ businesses</div>
            </motion.div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div 
            className="flex-1 relative w-full max-w-[400px] lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-[320px] aspect-[1/2.1] bg-card rounded-[3rem] border-[8px] border-foreground/10 shadow-2xl overflow-hidden glass-card"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-foreground/10 rounded-b-3xl w-1/2 mx-auto z-20"></div>
              
              {/* Inner App UI Mockup */}
              <div className="absolute inset-0 bg-background flex flex-col p-4 pt-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-xs text-muted-foreground">Total Balance</div>
                    <div className="text-2xl font-bold text-foreground">$24,500.00</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="font-bold">B</span>
                  </div>
                </div>

                {/* Chart Mockup */}
                <div className="h-32 mb-6 flex items-end gap-2">
                  {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                    <div key={i} className="w-full bg-primary/30 rounded-t-sm relative group cursor-pointer hover:bg-primary transition-colors" style={{ height: `${h}%` }}>
                      {i === 5 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">+$9k</div>}
                    </div>
                  ))}
                </div>

                {/* Recent Invoices */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="text-sm font-semibold mb-2">Recent Invoices</div>
                  {[
                    { n: 'Acme Corp', a: '$1,200', s: 'Paid', c: 'bg-primary/20 text-primary' },
                    { n: 'Global Tech', a: '$850', s: 'Pending', c: 'bg-secondary/20 text-secondary' },
                    { n: 'Studio MK', a: '$3,400', s: 'Paid', c: 'bg-primary/20 text-primary' }
                  ].map((inv, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">{inv.n[0]}</div>
                        <div>
                          <div className="text-sm font-medium">{inv.n}</div>
                          <div className={`text-[10px] font-medium px-2 py-0.5 rounded-full inline-block mt-1 ${inv.c}`}>{inv.s}</div>
                        </div>
                      </div>
                      <div className="font-bold text-sm">{inv.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [10, -10, 10], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 -right-10 md:-right-20 p-4 rounded-2xl glass-card z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Invoice Paid</div>
                  <div className="text-lg font-bold text-foreground">+$850.00</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-10, 10, -10], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-20 -left-10 md:-left-20 p-4 rounded-2xl glass-card z-30"
            >
               <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Cloud Backup</div>
                  <div className="text-sm font-bold text-foreground">Synced Just Now</div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
