import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

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

    // Check if EmailJS is properly configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID') {
      toast({
        title: "EmailJS not configured",
        description: "Please set up EmailJS to enable contact form. Check EMAILJS_SETUP.md for instructions.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Attempting to send email...');
      
      // Method 1: Try EmailJS first
      try {
        // Initialize EmailJS
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        
        const result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Akshay K A',
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        console.log('EmailJS result:', result);

        if (result.status === 200) {
          toast({
            title: "Message sent successfully!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
          return;
        }
      } catch (emailjsError) {
        console.error('EmailJS failed:', emailjsError);
        
        // Method 2: Fallback to direct email link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        const mailtoLink = `mailto:akshayanoop2014@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.open(mailtoLink);
        
        toast({
          title: "Email client opened",
          description: "EmailJS failed, but your email client should open with a pre-filled message. Please send it manually.",
        });
        
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        return;
      }

    } catch (error: any) {
      console.error('All email methods failed:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please contact me directly at akshayanoop2014@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: 'akshayanoop2014@gmail.com',
      link: 'mailto:akshayanoop2014@gmail.com'
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/akshay-k-a-254872253'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Location',
      value: 'Kottayam, Kerala, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-section-bg">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-portfolio">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-portfolio"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-portfolio"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-portfolio resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-portfolio">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-portfolio"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-light">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-portfolio">
              <h3 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h3>
              <p className="text-text-light mb-6">
                I'm always open to discussing new opportunities, collaborations, or just having a 
                chat about technology and development. Feel free to reach out!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/akshay-k-a-254872253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:akshayanoop2014@gmail.com"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;