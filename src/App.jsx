import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import OurStory from "./pages/OurStory";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/events" element={<EventDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Layout>
  );
}

export default App;
