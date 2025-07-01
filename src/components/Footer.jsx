import Logo from "./Logo";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/anbphotographyfilms/",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/>
        </svg>
      )
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@anbphotographyfilms",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.5 2h2.75v13.25a2.25 2.25 0 1 1-2.25-2.25h.25V11a4.75 4.75 0 1 0 4.75 4.75V8.5h-2.25V2Z"/>
        </svg>
      )
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "anbstudio77@gmail.com",
      href: "mailto:anbstudio77@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone & WhatsApp",
      value: "0304 1851531",
      href: "https://wa.me/923041851531"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Rawalpindi/Islamabad",
      href: "#"
    }
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-br from-card/50 via-card/30 to-secondary/20 backdrop-blur-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative container-enhanced">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-start space-y-6">
                <Logo size={64} />
                <div className="space-y-4">
                  <p className="text-lg text-muted leading-relaxed max-w-sm">
                    Capturing life's most precious moments with creativity and passion since 2020. 
                    Professional wedding photography and cinematography services.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Est. 2020 • Rawalpindi/Islamabad</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold font-serif mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? "_blank" : "_self"}
                    rel={contact.href.startsWith('http') ? "noopener noreferrer" : ""}
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 focus-ring"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-muted">{contact.label}</p>
                      <p className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links & Newsletter */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold font-serif mb-6 text-foreground">Follow Us</h3>
              <div className="space-y-4">
                <p className="text-muted text-sm leading-relaxed">
                  Stay connected with us on social media for the latest updates, behind-the-scenes content, and beautiful moments we capture.
                </p>
                
                {/* Social Media Links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 focus-ring"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-border/50 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
            <div className="flex items-center gap-4">
              <span>&copy; {currentYear} anbphotographyfilms. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Professional Wedding Photography & Cinematography</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Muadeel56" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300 focus-ring rounded px-1 py-0.5"
              >
                Developed by Adeel
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 