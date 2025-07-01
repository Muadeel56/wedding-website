import { motion } from "framer-motion";
import { Camera, Heart, Star, Award, Users, Video, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Wedding Photography",
    description: "Capturing your special day with timeless elegance and artistic vision."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Cinematic Films",
    description: "Creating stunning wedding films that tell your unique love story."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Fashion & Editorial",
    description: "Professional fashion photography with creative direction."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Family Portraits",
    description: "Beautiful family moments captured with warmth and authenticity."
  }
];

const stats = [
  { number: "2020", label: "Established", icon: <Award className="w-6 h-6" /> },
  { number: "500+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> },
  { number: "1000+", label: "Events Captured", icon: <Camera className="w-6 h-6" /> },
  { number: "5★", label: "Client Rating", icon: <Star className="w-6 h-6" /> }
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

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <motion.section
        className="relative section-padding overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container-enhanced relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-primary mb-6" />
              <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Us
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted mb-8 leading-relaxed"
            >
              Since 2020, <span className="text-primary font-semibold">anbphotographyfilms</span> has been dedicated to preserving memories that matter.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted max-w-3xl mx-auto leading-relaxed"
            >
              With a passion for storytelling, we combine creativity and technical skill to deliver beautiful, timeless images and films that reflect your unique journey. We create cinematic films and striking visuals that tell your unique story with passion and creativity.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="section-padding-sm bg-card/50 border-y border-border"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-enhanced">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="section-padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="container-enhanced">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Services</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              We offer comprehensive photography and videography services to capture your most precious moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <div className="card rounded-2xl p-8 h-full group-hover:border-primary/50">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="section-padding bg-secondary/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="container-enhanced">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heart className="w-16 h-16 mx-auto text-primary mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">Our Mission</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                To transform ordinary moments into extraordinary memories through the art of photography and cinematography. We believe every story deserves to be told beautifully.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="btn btn-primary focus-ring inline-flex items-center gap-2"
                >
                  Get in Touch
                </a>
                <a
                  href="/gallery"
                  className="btn btn-secondary focus-ring inline-flex items-center gap-2"
                >
                  View Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 