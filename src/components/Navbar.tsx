import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { RippleButton } from '@/src/components/ui/ripple-button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6',
        scrolled ? 'py-4' : 'py-4 sm:py-8'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 rounded-[2.5rem] px-8 py-4",
        scrolled ? "glass-card bg-white/90 shadow-[0_20px_40px_rgba(0,0,0,0.03)]" : "bg-transparent"
      )}>
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-secondary/10 relative overflow-hidden"
          >
            SG
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl leading-none text-secondary tracking-tight">
              Dr. Sayantan Gayen
            </span>
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-primary mt-1">
              Internal Medicine
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[13px] uppercase tracking-widest font-bold px-5 py-2.5 rounded-xl transition-all duration-500 relative group",
                location.pathname === link.path ? "text-primary" : "text-secondary/40 hover:text-secondary"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <div className="w-px h-6 bg-gray-100 mx-6" />
          <RippleButton
            onClick={() => navigate('/appointment')}
            className="btn-primary py-3 px-8 text-sm shadow-none hover:shadow-xl hover:shadow-primary/10 rounded-2xl flex items-center gap-2"
          >
            <Calendar size={16} />
            Book Now
          </RippleButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 text-secondary transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-card bg-white rounded-[2.5rem] p-8 flex flex-col gap-4 md:hidden z-50"
          >
            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-bold py-3 flex items-center justify-between",
                    location.pathname === link.path ? "text-primary" : "text-secondary"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 pt-6 border-t border-gray-100"
            >
              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-4 text-lg"
              >
                Book Appointment
              </Link>
              <a
                href="tel:07980165256"
                className="flex items-center justify-center gap-3 text-primary font-bold py-6"
              >
                <Phone size={20} />
                079801 65256
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);


export default Navbar;
