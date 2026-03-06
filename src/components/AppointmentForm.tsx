import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, User, Mail, MessageSquare, Send } from 'lucide-react';
import { RippleButton } from '@/src/components/ui/ripple-button';

const AppointmentForm = () => {
  return (
    <section className="section-padding bg-medical-bg relative overflow-hidden dot-matrix">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[3rem] sm:rounded-[5rem] shadow-[0_64px_128px_-24px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row border border-gray-50">
          {/* Info Side */}
          <div className="lg:w-[40%] bg-secondary p-10 sm:p-16 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -mr-40 -mt-40 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full -ml-40 -mb-40 blur-3xl" />
            
            <div className="relative z-10 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                  Priority Care
                </div>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-10 leading-[0.9] tracking-tighter">
                  Start Your <br />
                  <span className="text-primary italic font-serif font-medium">Better Health.</span>
                </h2>
                <p className="text-xl text-white/40 mb-16 leading-relaxed font-light">
                  Take the first step towards personalized medical care. Schedule your consultation with Dr. Sayantan Gayen today.
                </p>
              </motion.div>

              <div className="space-y-10 mt-auto">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Phone size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-2">Direct Line</div>
                    <div className="text-2xl font-display font-bold tracking-tight">079801 65256</div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                    <Calendar size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-2">Clinic Hours</div>
                    <div className="text-2xl font-display font-bold tracking-tight">Mon - Sat: 10 AM - 8 PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-3 text-sm uppercase tracking-widest">
                  <ShieldCheck size={18} />
                  Safe & Secure
                </h4>
                <p className="text-sm text-white/30 leading-relaxed font-light">
                  Your health data is encrypted and handled with the highest level of clinical confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-[60%] p-10 sm:p-16 lg:p-24 bg-white">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-16 pr-8 py-5 bg-medical-bg border border-transparent rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/10 transition-all font-medium text-base"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">Phone Number</label>
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                      <Phone size={20} />
                    </div>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full pl-16 pr-8 py-5 bg-medical-bg border border-transparent rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/10 transition-all font-medium text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full pl-16 pr-8 py-5 bg-medical-bg border border-transparent rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/10 transition-all font-medium text-base"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">Preferred Date</label>
                  <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                      <Calendar size={20} />
                    </div>
                    <input
                      type="date"
                      className="w-full pl-16 pr-8 py-5 bg-medical-bg border border-transparent rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/10 transition-all font-medium text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-secondary/30 uppercase tracking-[0.3em] ml-1">Health Concern</label>
                <div className="relative group">
                  <div className="absolute left-6 top-6 text-gray-300 group-focus-within:text-primary transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <textarea
                    placeholder="Briefly describe your health concern..."
                    rows={4}
                    className="w-full pl-16 pr-8 py-6 bg-medical-bg border border-transparent rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/10 transition-all font-medium resize-none text-base"
                  ></textarea>
                </div>
              </div>

              <RippleButton
                type="submit"
                className="btn-primary w-full py-4 sm:py-6 text-base sm:text-xl shadow-2xl shadow-primary/10 group rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center gap-2"
              >
                Confirm Appointment
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform sm:w-6 sm:h-6" size={20} />
              </RippleButton>
              
              <div className="flex items-center justify-center gap-3 text-secondary/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                <ShieldCheck size={16} />
                HIPAA Compliant & Secure
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShieldCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);


export default AppointmentForm;
