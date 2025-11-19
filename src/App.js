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
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-20 p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
