import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone, Github, ArrowRight, MessageSquare, Rocket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { motion } from 'framer-motion';

// Initialize EmailJS once (v4 API)
emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID') {
      toast({
        title: "Configuration Needed",
        description: "EmailJS is not configured. Redirecting to manual email...",
        variant: "destructive",
      });
      
      const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      window.location.href = `mailto:akshayanoop2014@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Akshay K A',
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        }
      );

      if (result.status === 200) {
        toast({
          title: "Message Transmitted",
          description: "Your message has been successfully sent to my engineering team.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: "Please contact me directly at akshayanoop2014@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container-portfolio">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Column: CTA & Info */}
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-border/50 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm"
              >
                Let's Collaborate
              </motion.div>
              <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-[0.9] uppercase tracking-tighter">
                Ready to <span className="text-gradient glow-accent">Scale</span> <br /> Your Vision?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl">
                Whether you're looking to build a scalable backend, integrate intelligent AI, or need a technical consultation, I'm here to bridge the gap between idea and execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-2xl w-fit text-primary border border-primary/10">
                  <Mail size={28} />
                </div>
                <h4 className="text-lg font-black text-foreground uppercase tracking-tight">Direct Email</h4>
                <a href="mailto:akshayanoop2014@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-500 font-bold block">
                  akshayanoop2014@gmail.com
                </a>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-2xl w-fit text-primary border border-primary/10">
                  <MessageSquare size={28} />
                </div>
                <h4 className="text-lg font-black text-foreground uppercase tracking-tight">Social Pulse</h4>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/akshay-k-a-254872253" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-500 hover:-translate-y-1">
                    <Linkedin size={28} />
                  </a>
                  <a href="https://github.com/akshayka2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-500 hover:-translate-y-1">
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-10 bg-white border border-border/40 rounded-[2.5rem] relative overflow-hidden group premium-shadow">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                <Rocket size={120} />
              </div>
              <h4 className="text-3xl font-black text-foreground mb-3 uppercase tracking-tight">Let's build the future.</h4>
              <p className="text-lg text-muted-foreground font-medium">Open for collaborations and interesting technical challenges.</p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="card-premium !p-0 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-12 space-y-10">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">Initialize Inquiry</h3>
                <p className="text-muted-foreground font-medium">I'll respond within 24 business hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Identity</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/20 border border-border/40 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all duration-500 font-bold text-foreground placeholder:text-muted-foreground/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Communication</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/20 border border-border/40 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all duration-500 font-bold text-foreground placeholder:text-muted-foreground/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Brief Description</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-secondary/20 border border-border/40 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all duration-500 font-bold text-foreground placeholder:text-muted-foreground/50 resize-none"
                      placeholder="Tell me about your vision..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Transmitting Vector...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span>Launch Inquiry</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </div>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;