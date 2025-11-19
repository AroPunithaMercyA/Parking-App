import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const activeClass = "bg-blue-600 text-white";
  const hoverClass = "hover:bg-gray-700 hover:text-white";
  const linkBase = "px-3 py-2 rounded-md transition";

  const isActive = (path) =>
    location.pathname === path ? activeClass : hoverClass;

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Parking App</h1>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-2">
          <Link to="/" className={`${linkBase} ${isActive("/")}`}>Home</Link>
          <Link to="/packages" className={`${linkBase} ${isActive("/packages")}`}>Packages</Link>
          <Link to="/booking" className={`${linkBase} ${isActive("/booking")}`}>Book Now</Link>
          <Link to="/contact" className={`${linkBase} ${isActive("/contact")}`}>Contact</Link>
          <Link to="/about" className={`${linkBase} ${isActive("/about")}`}>About Us</Link>
        </div>
      </div>

      {open && (
        <div className="flex flex-col items-center mt-4 space-y-2 md:hidden text-center">
          <Link to="/" className={`${linkBase} ${isActive("/")}`} onClick={() => setOpen(false)}>Home</Link>
          <Link to="/packages" className={`${linkBase} ${isActive("/packages")}`} onClick={() => setOpen(false)}>Packages</Link>
          <Link to="/booking" className={`${linkBase} ${isActive("/booking")}`} onClick={() => setOpen(false)}>Book Now</Link>
          <Link to="/contact" className={`${linkBase} ${isActive("/contact")}`} onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/about" className={`${linkBase} ${isActive("/about")}`} onClick={() => setOpen(false)}>About Us</Link>
        </div>
      )}
    </nav>
  );
}
