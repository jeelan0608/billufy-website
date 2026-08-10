import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { ArrowUpRight, TrendingUp, DollarSign, ShoppingCart, AlertCircle } from "lucide-react";

const data = [
  { name: 'Mon', total: 1200 },
  { name: 'Tue', total: 2100 },
  { name: 'Wed', total: 1800 },
  { name: 'Thu', total: 2400 },
  { name: 'Fri', total: 3200 },
  { name: 'Sat', total: 4500 },
  { name: 'Sun', total: 3900 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-xl">
        <p className="text-sm font-medium text-muted-foreground mb-1">Revenue</p>
        <p className="text-lg font-bold text-primary">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function DashboardPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Your business at a glance.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Make better decisions with real-time insights. Billufy automatically calculates your profit, tracks bestsellers, and monitors cash flow.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden glass-card"
        >
          <div className="border-b border-border/50 bg-muted/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium text-muted-foreground">Billufy Analytics</div>
            <div className="w-16"></div>
          </div>
          
          <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-10">
            {/* Left Column Stats */}
            <div className="lg:w-1/3 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <DollarSign size={80} />
                </div>
                <div className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  Total Revenue <TrendingUp size={14} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">$19,100.00</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <span className="text-primary font-medium flex items-center"><ArrowUpRight size={14} /> 12.5%</span> vs last week
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-muted/50 border border-border">
                  <ShoppingCart className="text-muted-foreground mb-3" size={20} />
                  <div className="text-2xl font-bold mb-1">342</div>
                  <div className="text-xs text-muted-foreground font-medium">Orders this week</div>
                </div>
                <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <AlertCircle className="text-destructive mb-3" size={20} />
                  <div className="text-2xl font-bold text-destructive mb-1">5</div>
                  <div className="text-xs text-destructive/70 font-medium">Items low stock</div>
                </div>
              </div>
            </div>

            {/* Right Column Chart */}
            <div className="lg:w-2/3 flex flex-col">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-xl font-bold">Revenue Overview</h3>
                  <p className="text-sm text-muted-foreground">Daily performance metrics</p>
                </div>
                <select className="bg-background border border-border text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>This Month</option>
                </select>
              </div>
              <div className="flex-1 min-h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      dy={10}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="total" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorTotal)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </section>
  );
}
