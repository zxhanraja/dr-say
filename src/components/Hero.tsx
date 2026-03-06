import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RippleButton } from '@/src/components/ui/ripple-button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-32 lg:pt-20 overflow-hidden bg-medical-bg dot-matrix">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[140px] -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4 lg:mb-10">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Top Rated Internal Medicine Specialist
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold text-secondary leading-[0.9] mb-4 lg:mb-10 tracking-tighter">
              Your Health, <br />
              <span className="text-primary italic font-serif font-medium">Our Priority.</span>
            </h1>

            <p className="text-base sm:text-2xl text-secondary/50 mb-14 sm:mb-12 max-w-2xl leading-relaxed font-light">
              Dr. Sayantan Gayen provides world-class <span className="text-secondary font-medium">Internal Medicine</span> and <span className="text-secondary font-medium">Diabetes Care</span> with a personalized, patient-first approach.
            </p>

            {/* Mobile Stats & Photo Row */}
            <div className="flex lg:hidden items-center justify-between gap-6 mb-16">
              <div className="flex flex-col gap-4">
                {[
                  { label: "Experience", value: "10+ Yrs" },
                  { label: "Patients", value: "1000+" },
                  { label: "Rating", value: "5.0 ★" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl font-display font-bold text-secondary leading-none">{stat.value}</span>
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-secondary/30 mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="relative group mt-6">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                    alt="Dr. Sayantan Gayen"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -inset-2 bg-primary/10 rounded-[2.5rem] blur-xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 lg:mb-16">
              <RippleButton 
                onClick={() => navigate('/appointment')}
                className="btn-primary w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-base font-bold group flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </RippleButton>
              
              <a href="tel:07980165256" className="flex items-center justify-between w-full sm:w-auto sm:min-w-[240px] bg-white px-4 py-1.5 sm:px-6 sm:py-3 rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-xl hover:border-primary/20">
                <div className="flex flex-col text-left">
                  <span className="text-[6px] sm:text-[7px] uppercase tracking-widest font-bold text-secondary/30">Emergency Call</span>
                  <span className="text-xs sm:text-base font-bold text-secondary">079801 65256</span>
                </div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone size={14} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              </a>
            </div>

            {/* Desktop Stats */}
            <div className="hidden lg:grid grid-cols-3 gap-12 pt-12 border-t border-gray-100">
              {[
                { label: "Experience", value: "10+ Yrs", desc: "Clinical Excellence" },
                { label: "Patients", value: "1000+", desc: "Lives Impacted" },
                { label: "Rating", value: "5.0 ★", desc: "Patient Trust" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col"
                >
                  <span className="text-4xl font-display font-bold text-secondary leading-none mb-2">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/30">{stat.label}</span>
                  <span className="text-[9px] uppercase tracking-widest font-medium text-primary/40 mt-1">{stat.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Photo */}
        <div className="hidden lg:col-span-5 lg:block order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_48px_96px_-16px_rgba(0,0,0,0.15)] border-[12px] border-white aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                alt="Dr. Sayantan Gayen"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity duration-1000" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-secondary">Consultation Open</div>
                  <div className="text-[10px] text-secondary/40 uppercase tracking-widest font-bold">Behala Chowrasta</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
