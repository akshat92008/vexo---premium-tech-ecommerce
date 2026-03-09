import { BarChart3, Users, ShoppingBag, DollarSign, Package, Settings, Bell } from 'lucide-react';

export default function Admin() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-display font-black tracking-tighter">COMMAND CENTER</h1>
            <p className="text-text-muted font-medium uppercase tracking-[0.3em] text-[10px]">Neural Grid Management & Analytics</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-white/5 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Admin" />
                </div>
              ))}
            </div>
            <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all relative group">
              <Bell size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
              <span className="absolute top-4 right-4 w-1.5 h-1.5 bg-primary rounded-full neon-glow" />
            </button>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-white">ADMIN_ALPHA</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase">System Overseer</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary p-px">
                <div className="w-full h-full rounded-[0.9rem] bg-background flex items-center justify-center text-white font-black">
                  AX
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: 'Gross Revenue', value: '$124,563', icon: <DollarSign size={20} />, trend: '+12.5%', color: 'primary' },
            { title: 'Active Orders', value: '842', icon: <ShoppingBag size={20} />, trend: '+5.2%', color: 'secondary' },
            { title: 'Neural Users', value: '12,450', icon: <Users size={20} />, trend: '+18.1%', color: 'accent' },
            { title: 'Unit Sales', value: '3,240', icon: <Package size={20} />, trend: '+2.4%', color: 'silver' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-8 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-[1.2rem] bg-${stat.color}/10 text-${stat.color} flex items-center justify-center border border-${stat.color}/20 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/20">
                  <span className="text-primary text-[10px] font-black">{stat.trend}</span>
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{stat.title}</p>
              <h3 className="text-4xl font-display font-black text-white tracking-tight">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 glass-card p-10 rounded-[3rem] border-white/5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <h2 className="text-2xl font-display font-black tracking-tight">RECENT TRANSMISSIONS</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-1">Live Order Stream</p>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors pb-1 border-b border-primary/20 hover:border-white">
                Access Audit Logs
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 border-b border-white/5">
                    <th className="pb-6">Protocol ID</th>
                    <th className="pb-6">Subject</th>
                    <th className="pb-6">Timestamp</th>
                    <th className="pb-6">Value</th>
                    <th className="pb-6">Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[1, 2, 3, 4, 5, 6].map((row) => (
                    <tr key={row} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                      <td className="py-6 font-mono font-black text-white/60 group-hover:text-primary transition-colors">#VX-{1000 + row}</td>
                      <td className="py-6 italic font-medium">Citizen_{829 + row}</td>
                      <td className="py-6 text-gray-500 font-bold">T-MINUS {row}H</td>
                      <td className="py-6 font-display font-black text-white">${(249 + row * 10).toFixed(0)}.99</td>
                      <td className="py-6">
                        <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                          row % 3 === 0 ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                          row % 2 === 0 ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                          'bg-primary/10 text-primary border border-primary/20'
                        }`}>
                          {row % 3 === 0 ? 'Pending' : row % 2 === 0 ? 'Transit' : 'Secured'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4 glass-card p-10 rounded-[3rem] border-white/5">
            <h2 className="text-2xl font-display font-black tracking-tight mb-12">ELITE HARDWARE</h2>
            <div className="space-y-8">
              {[
                { name: 'Aura Sonic Pro', sales: '1,204', price: '399', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=200' },
                { name: 'Neural Link X1', sales: '842', price: '299', img: 'https://images.unsplash.com/photo-1546435770-a3e426ff472b?auto=format&fit=crop&q=80&w=200' },
                { name: 'Quantum Buds', sales: '613', price: '199', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=200' },
                { name: 'Carbon Shell', sales: '430', price: '599', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=200' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-[1.2rem] bg-background border border-white/5 overflow-hidden flex-shrink-0 group-hover:border-primary/50 transition-all">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-white text-xs group-hover:text-primary transition-colors">{item.name.toUpperCase()}</h4>
                    <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mt-1">{item.sales} UNITS SHIPPED</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-black text-white text-sm">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <BarChart3 size={24} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Inventory Status</p>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-primary neon-glow" />
                  </div>
                  <p className="text-[9px] font-bold text-gray-500">85% OPTIMAL CAPACITY</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
