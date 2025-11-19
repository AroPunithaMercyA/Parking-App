import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Booking from "./pages/booking";
import Contact from "./pages/contact";
import About from "./pages/about";
import Packages from "./pages/packages";

function App() {
  return (
    <Router>
      {/* Navbar always */}
      <Navbar />

      {/* Page Content */}
      <div className="p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* SAME BIG FOOTER ON ALL PAGES */}
      <Footer />
    </Router>
  );
}

export default App;
