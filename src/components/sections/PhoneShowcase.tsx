import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Receipt, Package, Users, Settings } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "billing", label: "Billing", icon: Receipt },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "customers", label: "Customers", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function PhoneShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 overflow-hidden bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full lg:max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">A complete command center in your pocket.</h2>
            <p className="text-lg text-muted-foreground mb-10">Switch between managing sales, tracking stock, and viewing reports with a single tap. Designed specifically for the fast-paced retail environment.</p>
            
            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                    activeTab === tab.id 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-100" 
                      : "bg-transparent text-muted-foreground hover:bg-card hover:text-foreground scale-95 origin-left"
                  }`}
                >
                  <tab.icon size={24} />
                  <span className="text-lg font-semibold">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full relative">
            {/* Phone Frame */}
            <div className="relative w-full max-w-[340px] aspect-[1/2.1] bg-black dark:bg-[#111] rounded-[3.5rem] border-[10px] border-black shadow-2xl p-2 z-10 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl w-1/2 mx-auto z-20"></div>
              
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-4 pt-12 flex flex-col bg-muted/10"
                  >
                    {/* Render different mock content based on tab */}
                    {activeTab === "dashboard" && (
                      <div className="space-y-4">
                        <div className="h-24 rounded-2xl bg-gradient-to-r from-primary to-emerald-400 p-4 text-white">
                          <div className="text-white/80 text-sm">Today's Sales</div>
                          <div className="text-3xl font-bold">$1,245.50</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-24 rounded-2xl bg-card border border-border p-3">
                             <div className="text-muted-foreground text-xs">Orders</div>
                             <div className="text-xl font-bold mt-1">42</div>
                          </div>
                          <div className="h-24 rounded-2xl bg-card border border-border p-3">
                             <div className="text-muted-foreground text-xs">Profit</div>
                             <div className="text-xl font-bold mt-1 text-primary">+$340</div>
                          </div>
                        </div>
                        <div className="h-40 rounded-2xl bg-card border border-border p-4">
                          <div className="h-4 w-1/2 bg-muted rounded mb-4"></div>
                          <div className="flex items-end gap-2 h-20 mt-4">
                             {[30, 50, 40, 70, 60, 90, 80].map((h,i)=>(
                               <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{height: `${h}%`}}></div>
                             ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "billing" && (
                      <div className="space-y-3 h-full flex flex-col">
                        <div className="flex items-center gap-3 bg-card p-3 rounded-xl border border-border">
                          <div className="flex-1">
                            <div className="text-sm font-bold">Search Product</div>
                            <div className="text-xs text-muted-foreground">Scan barcode or type</div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">🔍</div>
                        </div>
                        <div className="flex-1 bg-card rounded-2xl border border-border p-3 space-y-3">
                          {[1,2,3].map(i=>(
                            <div key={i} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                              <div>
                                <div className="text-sm font-semibold">Premium Coffee</div>
                                <div className="text-xs text-muted-foreground">2 x $15.00</div>
                              </div>
                              <div className="font-bold text-sm">$30.00</div>
                            </div>
                          ))}
                        </div>
                        <div className="h-16 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg">
                          Charge $90.00
                        </div>
                      </div>
                    )}
                    
                    {/* Other tabs can just show simplified mockups */}
                    {["inventory", "customers", "settings"].includes(activeTab) && (
                      <div className="space-y-3">
                        <div className="h-10 w-1/2 bg-card rounded-lg border border-border mb-6"></div>
                        {[1,2,3,4,5].map(i=>(
                          <div key={i} className="h-16 bg-card rounded-xl border border-border flex items-center px-3 gap-3">
                            <div className="w-10 h-10 rounded-full bg-muted"></div>
                            <div className="flex-1 space-y-2">
                              <div className="h-3 w-2/3 bg-muted rounded"></div>
                              <div className="h-2 w-1/3 bg-muted rounded"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none mix-blend-screen"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
