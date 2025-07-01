import { useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const OurStory = lazy(() => import("./pages/OurStory"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  if (loading) {
    return <SplashScreen onFinished={() => setLoading(false)} />;
  }

  return (
    <Layout>
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/story" element={<OurStory />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;
