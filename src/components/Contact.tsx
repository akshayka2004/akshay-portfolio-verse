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
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: CTA & Info */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest"
              >
                Contact
              </motion.div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Ready to <span className="text-gradient">Scale</span> Your Vision?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're looking to build a scalable backend, integrate intelligent AI, or need a technical consultation, I'm here to bridge the gap between idea and execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-foreground">Direct Email</h4>
                <a href="mailto:akshayanoop2014@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  akshayanoop2014@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-4">
                  <MessageSquare size={24} />
                </div>
                <h4 className="font-bold text-foreground">Social Pulse</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/akshay-k-a-254872253" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/akshayka2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border border-border/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket size={80} />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-2">Let's build the future.</h4>
              <p className="text-muted-foreground">Open for collaborations and interesting technical challenges.</p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="premium-card !p-0 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-10 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Send a Secure Message</h3>
                <p className="text-muted-foreground">I'll respond within 24 business hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/30 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/30 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-secondary/30 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="Tell me about your vision..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Transmitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Launch Inquiry</span>
                      <Send size={18} />
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