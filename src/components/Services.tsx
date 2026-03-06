import React from 'react';
import { motion } from 'motion/react';
import { Activity, Heart, Shield, Thermometer, UserCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { RippleButton } from '@/src/components/ui/ripple-button';

const services = [
  {
    title: "Diabetes Management",
    description: "Comprehensive care for Type 1, Type 2, and Gestational diabetes with personalized diet and medication plans.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Hypertension Treatment",
    description: "Expert management of high blood pressure to prevent cardiovascular complications and improve quality of life.",
    icon: Heart,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "General Medicine",
    description: "Diagnosis and treatment of a wide range of acute and chronic medical conditions for adult patients.",
    icon: Stethoscope,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Thyroid Disorders",
    description: "Specialized care for hypothyroidism, hyperthyroidism, and other endocrine-related health issues.",
    icon: Shield,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Preventive Health",
    description: "Regular checkups and screenings to detect potential health issues early and maintain optimal wellness.",
    icon: UserCheck,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Lifestyle Diseases",
    description: "Management of obesity, high cholesterol, and other conditions related to modern lifestyle habits.",
    icon: Thermometer,
    color: "bg-teal-50 text-teal-600"
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-white relative overflow-hidden dot-matrix">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-secondary mb-10 leading-[0.9] tracking-tighter"
          >
            Specialized <span className="text-primary italic font-serif font-medium">Medical Care</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-secondary/50 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We combine clinical excellence with a compassionate, patient-first approach to manage chronic conditions and promote overall wellness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative p-12 rounded-[3.5rem] bg-medical-bg border border-gray-50 transition-all duration-700 hover:bg-white hover:shadow-[0_48px_96px_-24px_rgba(31,122,140,0.15)] hover:border-primary/10 overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-secondary mb-5 group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-secondary/50 leading-relaxed mb-12 group-hover:text-secondary/70 transition-colors font-light">
                {service.description}
              </p>
              
              <Link 
                to="/services" 
                className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-primary group/link"
              >
                Learn More
                <div className="w-10 h-0.5 bg-primary/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary -translate-x-full group-hover/link:translate-x-0 transition-transform duration-700" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <RippleButton 
            onClick={() => navigate('/services')}
            className="btn-secondary inline-flex py-4 sm:py-6 px-8 sm:px-12 rounded-xl sm:rounded-2xl text-sm sm:text-base"
          >
            View All Services
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
};


export default Services;
