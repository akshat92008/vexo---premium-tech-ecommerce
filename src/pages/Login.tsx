import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/register
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="bg-background min-h-screen pt-20 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-xl mx-6"
      >
        <div className="glass-card p-12 md:p-16 rounded-[4rem] border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
          
          <div className="relative z-10">
            <div className="text-center mb-16 space-y-4">
              <Link to="/" className="inline-block group/logo">
                <span className="text-4xl font-display font-black tracking-tighter text-white group-hover:text-primary transition-colors">
                  VEXO<span className="text-primary group-hover:text-white transition-colors">.</span>
                </span>
                <div className="w-8 h-0.5 bg-primary mt-1 mx-auto origin-left group-hover:scale-x-150 transition-transform" />
              </Link>
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-bold tracking-tight uppercase">
                  {isLogin ? 'IDENTITY AUTHORIZATION' : 'NEURAL ENROLLMENT'}
                </h2>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 italic">
                  {isLogin ? '“Welcome to the next evolution of sound.”' : '“Join the elite circle of sonic pioneers.”'}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex p-1.5 bg-black/40 backdrop-blur-md rounded-2xl mb-12 border border-white/5 relative">
              <div 
                className={`absolute inset-y-1.5 w-[calc(50%-6px)] bg-white rounded-xl transition-all duration-500 ease-out ${
                  isLogin ? 'left-1.5' : 'left-[calc(50%+3px)]'
                }`}
              />
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors duration-500 ${
                  isLogin ? 'text-black' : 'text-gray-500 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors duration-500 ${
                  !isLogin ? 'text-black' : 'text-gray-500 hover:text-white'
                }`}
              >
                Join Protocol
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {!isLogin && (
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 italic">Full Designation</label>
                    <div className="relative group/input">
                      <input required type="text" placeholder="GHOST IN THE SHELL" className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] pl-14 pr-6 py-5 text-sm font-bold text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700 uppercase" />
                      <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-primary transition-colors" />
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4 italic">Neural Link (Email)</label>
                  <div className="relative group/input">
                    <input required type="email" placeholder="YOU@NEURAL.NET" className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] pl-14 pr-6 py-5 text-sm font-bold text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700 uppercase" />
                    <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-primary transition-colors" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center px-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Access Phrase</label>
                    {isLogin && (
                      <a href="#" className="text-[10px] font-black text-primary uppercase tracking-widest hover:text-white transition-colors">Decrypt?</a>
                    )}
                  </div>
                  <div className="relative group/input">
                    <input required type="password" placeholder="••••••••" className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] pl-14 pr-6 py-5 text-sm font-bold text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-700" />
                    <Lock size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-primary transition-colors" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-white text-black py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-primary shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-4 mt-4 group/btn active:scale-[0.98]"
                >
                  {isLogin ? 'INITIATE SESSION' : 'AUTHORIZE ACCOUNT'} <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </motion.form>
            </AnimatePresence>

            <div className="mt-12 pt-12 border-t border-white/5 space-y-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <span className="relative z-10 px-6 bg-[#030303]/40 backdrop-blur-xl text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] italic">Alternative Uplinks</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <button className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-gray-400 py-5 rounded-[2rem] transition-all duration-500 text-[10px] font-black uppercase tracking-widest group/social">
                  <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-gray-400 py-5 rounded-[2rem] transition-all duration-500 text-[10px] font-black uppercase tracking-widest group/social">
                  <Github size={20} className="group-hover/social:scale-110 transition-transform" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
