import { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const OurStory = lazy(() => import("./pages/OurStory"));
const EventDetails = lazy(() => import("./pages/EventDetails"));

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinished={() => setLoading(false)} />;
  }

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/events" element={<EventDetails />} />
          {/* Add other routes here */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
