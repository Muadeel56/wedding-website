import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock, Star, Send } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Phone & WhatsApp",
    value: "0304 1851531",
    link: "https://wa.me/923041851531",
    description: "Call or message us directly"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    value: "anbstudio77@gmail.com",
    link: "mailto:anbstudio77@gmail.com",
    description: "Send us an email anytime"
  },
  {
    icon: <Instagram className="w-8 h-8" />,
    title: "Instagram",
    value: "@anbphotographyfilms",
    link: "https://www.instagram.com/anbphotographyfilms/",
    description: "Follow us and send DM"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Location",
    value: "Rawalpindi/Islamabad",
    link: "#",
    description: "Based in Pakistan, available worldwide"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto bg-card/80 rounded-2xl shadow-lg border border-border p-8 md:p-12 backdrop-blur-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <MessageCircle className="w-16 h-16 mx-auto text-primary mb-4" />
              <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed"
            >
              We'd love to hear from you! Whether you're planning your big day, launching a creative project, or simply want to capture moments that matter—let's connect.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? "_blank" : "_self"}
                  rel={method.link.startsWith('http') ? "noopener noreferrer" : ""}
                  className="block bg-card/90 rounded-2xl p-8 h-full border border-border shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50 backdrop-blur-md"
                >
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{method.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-2">{method.value}</p>
                  <p className="text-foreground/80">{method.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-20 bg-card/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-foreground">Send us a Message</h2>
              <p className="text-xl text-foreground/80">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-background/90 rounded-2xl p-8 md:p-12 border border-border shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="cinematic">Cinematic Films</option>
                    <option value="fashion">Fashion & Editorial</option>
                    <option value="family">Family Portraits</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-foreground">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project, event date, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Quick Info */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Response Time</h3>
              <p className="text-foreground/80">We respond within 24 hours</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Quality Guarantee</h3>
              <p className="text-foreground/80">100% satisfaction guaranteed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Location</h3>
              <p className="text-foreground/80">Available worldwide</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 