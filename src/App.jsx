import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronLeft, ChevronRight, Star, ArrowRight, ShieldCheck, Smile, Activity, Heart, Calendar, Clock, User } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center w-full fixed z-50 transition-all duration-300 px-4 top-4">
      <nav className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-xl py-3 border border-gray-100' : 'bg-white/80 backdrop-blur-md shadow-lg py-4 border border-white/40'}`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, '#home')}>
              <img src="/logo.png" alt="Lokael Dental Logo" className="h-12 w-auto object-contain" />
              <h1 className="font-bold text-2xl tracking-tighter text-blue-900 m-0 p-0 uppercase">Lokael <span className="text-blue-500 font-light">Dental</span></h1>
            </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => onOpenBooking()}
              className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-800 font-medium py-2 px-4 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      </nav>
    </div>
  );
};

const Hero = ({ onOpenBooking }) => {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
              <Star size={16} className="fill-primary text-primary" /> Top Rated Clinic in Madhapur
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Expert Dental Care <br /> You Can <span className="text-primary relative inline-block">
                Lean On
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Transforming smiles with world-class technology and compassionate care. Experience the perfect blend of clinical excellence and patient comfort at Lokael Dental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onOpenBooking()}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1"
              >
                Book Appointment <ArrowRight size={20} />
              </button>
              <a 
                href="tel:9441234083" 
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-md"
              >
                <Phone size={20} className="text-primary" /> Call 9441234083
              </a>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 xl:scale-110 xl:origin-left">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-300 rounded-[2rem] transform rotate-3 opacity-20 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Modern Dental Clinic" 
              className="relative z-10 w-full h-auto min-h-[400px] rounded-[2rem] shadow-2xl object-cover object-center aspect-[4/3] border-8 border-white bg-gray-100"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Clinic" }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Smile size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl">1000+</p>
                <p className="text-sm text-gray-500 font-medium">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dental Professional" 
              className="rounded-3xl shadow-xl w-full h-auto min-h-[400px] object-cover bg-gray-100 border-8 border-white"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Professional" }}
            />
            <div className="absolute -right-8 top-1/4 bg-primary text-white p-6 rounded-2xl shadow-xl transform rotate-6">
               <ShieldCheck size={40} className="mb-2" />
               <p className="font-bold text-lg leading-tight">Advanced<br/>Technology</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Our Philosophy</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Precision. <span className="text-primary">Strength.</span> Care.</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed border-l-4 border-secondary pl-6 italic">
              "Located in Madhapur, Hyderabad, Lokael Dental combines clinical precision with a patient-first approach. We are dedicated to providing unshakeable dental excellence using state-of-the-art technology."
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We understand that visiting the dentist can be intimidating. That's why we've created a clinic environment focused on exceptional comfort while delivering enduring results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-primary"><Activity size={24} /></div>
                <span className="font-semibold text-gray-800">State-of-the-art</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-primary"><Heart size={24} /></div>
                <span className="font-semibold text-gray-800">Patient-first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Treatments = () => {
  const services = [
    {
      title: "General Care",
      desc: "Cleanings, Fillings, & Prevention.",
      icon: <ShieldCheck size={32} />,
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      color: "blue"
    },
    {
      title: "Restorative",
      desc: "Root Canals, Crowns, & Implants.",
      icon: <Activity size={32} />,
      img: "https://images.unsplash.com/photo-1598256989800-fea5ce59fda6?auto=format&fit=crop&w=600&q=80",
      color: "indigo"
    },
    {
      title: "Cosmetic",
      desc: "Professional Whitening & Veneers.",
      icon: <Star size={32} />,
      img: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&w=600&q=80",
      color: "sky"
    },
    {
      title: "Orthodontics",
      desc: "Braces & Clear Aligners.",
      icon: <Smile size={32} />,
      img: "https://images.unsplash.com/photo-1600170068305-64903df12513?auto=format&fit=crop&w=600&q=80",
      color: "cyan"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Treatments</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From routine cleanings to complex restorative work, we provide a full spectrum of services under one roof.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100">
              <div className="h-48 overflow-hidden relative bg-gray-100">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Dental+Care" }} />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-6 bg-white p-4 rounded-xl shadow-md text-primary transform rotate-3 group-hover:rotate-0 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="mt-6 flex items-center text-primary font-medium cursor-pointer group-hover:text-blue-700">
                  Read more <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const reviews = [
    {
      text: "Lokael Dental completely changed my view on dentist visits. It was painless and the results are amazing. Highly recommend to everyone in Madhapur!",
      author: "Priya S.",
      role: "Local Resident",
      rating: 5
    },
    {
      text: "State-of-the-art clinic with incredibly professional staff. They explained my root canal procedure thoroughly and made sure I was comfortable.",
      author: "Rahul V.",
      role: "Software Engineer",
      rating: 5
    },
    {
      text: "Got my Invisalign treatment here. The attention to detail and patient care is unmatched. So happy with my new smile!",
      author: "Anjali K.",
      role: "Student",
      rating: 5
    }
  ];

  const next = () => setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? reviews.length - 1 : current - 1);

  return (
    <section id="testimonials" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">What Our Patients Say</h2>
        
        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="flex justify-center mb-6">
            {[...Array(reviews[current].rating)].map((_, i) => (
              <Star key={i} size={24} className="fill-yellow-400 text-yellow-400 mx-1" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
            "{reviews[current].text}"
          </p>
          <div>
            <h4 className="text-xl font-bold">{reviews[current].author}</h4>
            <p className="text-blue-200">{reviews[current].role}</p>
          </div>
          
          <div className="flex justify-center space-x-4 mt-10">
            <button onClick={prev} className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {reviews.map((_, i) => (
                <div key={i} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/30'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Clinic</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're conveniently located in Madhapur. Reach out to schedule your appointment today.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 p-8 rounded-2xl">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-primary text-white p-3 rounded-full shrink-0">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">Call Us Directly</p>
                     <p className="text-xl font-bold text-gray-900 mt-1">9441234083</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-primary text-white p-3 rounded-full shrink-0">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">Location</p>
                     <p className="text-lg font-bold text-gray-900 mt-1">Madhapur, Hyderabad</p>
                     <a href="https://maps.app.goo.gl/w9GXUn1W1aNtnBLr9" target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm font-medium mt-2 inline-block">Get Directions →</a>
                   </div>
                 </div>
               </div>
               
               <div className="mt-10">
                 <h4 className="font-bold text-gray-900 mb-3">Opening Hours</h4>
                 <ul className="space-y-2 text-gray-600">
                   <li className="flex justify-between"><span>Mon - Sat:</span> <span className="font-medium text-gray-900">9:30 AM - 8:30 PM</span></li>
                   <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-gray-900">By Appointment</span></li>
                 </ul>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.529564464858!2d78.38377997462823!3d17.443956901174154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918f6beeaeeb%3A0xb7ebe3027637c15c!2sLokael%20Dental%20Care!5e1!3m2!1sen!2sin!4v1776423120795!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0, position: 'absolute', top:0, left:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokael Dental Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl w-fit xl:ml-0 mx-auto md:mx-0">
              <img src="/logo.png" alt="Lokael Dental" className="h-10 object-contain" />
              <span className="font-bold text-2xl tracking-tight text-blue-900 pr-2 uppercase">Lokael <span className="text-secondary font-light">Dental</span></span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Expert Dental Care You Can Lean On.<br/> Madhapur, Hyderabad.
            </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-bold text-xl mb-1 text-white border-b-2 border-primary pb-1">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)} 
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Lokael Dental.</p>
          <p>All rights reserved.</p>
          <div className="flex gap-6 mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="bg-primary p-6 text-white text-center relative shrink-0">
          <button onClick={onClose} className="absolute right-4 top-4 hover:bg-white/20 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
          <h3 className="text-3xl font-bold mb-2">Book Appointment</h3>
          <p className="text-blue-100">Schedule your visit with Lokael Dental</p>
        </div>
        
        <div className="p-8 overflow-y-auto w-full style-scroll">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Appointment Requested!"); onClose(); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input required placeholder="Your Name" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="text" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input required placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                  <input required placeholder="Your Age" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" type="number" min="1" max="120" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Select Date</label>
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-700" type="date" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Time</label>
                  <div className="relative">
                    <Clock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none bg-transparent">
                      <option value="">Select Slot</option>
                      <option value="morning">Morning (9:30 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30">
                Confirm Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="font-sans text-slate-800 bg-white smooth-scroll selection:bg-primary selection:text-white relative">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <About />
      <Treatments />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
