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
      window.location.href = `mailto:${EMAILJS_CONFIG.TO_EMAIL}?subject=${subject}&body=${body}`;
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
        description: `Please contact me directly at ${EMAILJS_CONFIG.TO_EMAIL}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-primary/[0.02] rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-accent/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="container-portfolio">
        <div className="grid lg:grid-cols-2 gap-32">
          {/* Left Column: CTA & Info */}
          <motion.div 
            className="space-y-20"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="space-y-10">
              <motion.div 
                className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl"
              >
                Let's Collaborate
              </motion.div>
              <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-foreground leading-[0.85] uppercase tracking-tighter">
                Ready to <span className="text-gradient">Scale</span> <br /> Your Vision?
              </h2>
              <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-medium max-w-xl tracking-tight">
                Whether you're architecting a high-throughput backend or integrating specialized AI agents, let's build the infrastructure that wins.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="p-6 bg-primary/[0.04] rounded-2xl w-fit text-primary border border-primary/10">
                  <Mail size={32} />
                </div>
                <h4 className="text-xl font-black text-foreground uppercase tracking-tight">Direct Vector</h4>
                <a href="mailto:akshayanoop2014@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-all duration-700 font-black tracking-tight block">
                  akshayanoop2014@gmail.com
                </a>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-primary/[0.04] rounded-2xl w-fit text-primary border border-primary/10">
                  <MessageSquare size={32} />
                </div>
                <h4 className="text-xl font-black text-foreground uppercase tracking-tight">Social Pulse</h4>
                <div className="flex gap-8">
                  <a href="https://linkedin.com/in/akshay-k-a-254872253" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-700 hover:-translate-y-2">
                    <Linkedin size={32} />
                  </a>
                  <a href="https://github.com/akshayka2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-700 hover:-translate-y-2">
                    <Github size={32} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-12 bg-slate-50/50 border border-black/[0.03] rounded-[3rem] relative overflow-hidden group premium-shadow">
              <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-1000 ease-out">
                <Rocket size={160} />
              </div>
              <h4 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">The Future is Built.</h4>
              <p className="text-xl text-muted-foreground font-medium tracking-tight">Currently open for strategic partnerships and technical consulting roles.</p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="card-premium !p-0 overflow-hidden relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="p-16 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">Initialize Build</h3>
                <p className="text-lg text-muted-foreground font-medium tracking-tight">Response latency: &lt; 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] ml-1">Identity</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-black/[0.06] rounded-2xl px-8 py-6 focus:outline-none focus:ring-8 focus:ring-primary/[0.03] focus:border-primary/30 transition-all duration-700 ease-[0.23,1,0.32,1] font-black text-foreground placeholder:text-black/10 uppercase text-xs tracking-[0.1em]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] ml-1">Communication</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-black/[0.06] rounded-2xl px-8 py-6 focus:outline-none focus:ring-8 focus:ring-primary/[0.03] focus:border-primary/30 transition-all duration-700 ease-[0.23,1,0.32,1] font-black text-foreground placeholder:text-black/10 uppercase text-xs tracking-[0.1em]"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.4em] ml-1">Objective</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white border border-black/[0.06] rounded-2xl px-8 py-6 focus:outline-none focus:ring-8 focus:ring-primary/[0.03] focus:border-primary/30 transition-all duration-700 ease-[0.23,1,0.32,1] font-black text-foreground placeholder:text-black/10 uppercase text-xs tracking-[0.1em] resize-none"
                      placeholder="Project vision, technical bottlenecks, or collaboration goals..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary !py-8 group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Transmitting Vector...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <span>Launch Inquiry</span>
                      <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-1000 ease-[0.23,1,0.32,1]" />
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