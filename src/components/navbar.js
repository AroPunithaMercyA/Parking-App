import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Parking App</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/packages" className="hover:text-blue-400">Packages</Link>
        <Link to="/booking" className="hover:text-blue-400">Book Now</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
      </div>
    </nav>
  );
}
