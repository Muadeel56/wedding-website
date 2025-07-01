import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center section-padding">
      <div className="container-enhanced text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-8xl md:text-9xl font-bold text-primary mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            404
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p
            className="text-lg text-muted mb-12 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The page you're looking for seems to have wandered off. 
            Let's get you back to capturing beautiful moments.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/"
              className="btn btn-primary focus-ring inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary focus-ring inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 