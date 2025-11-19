import { Link } from "react-router-dom";
import { FaShieldAlt, FaClock, FaCarSide, FaHandshake } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Home() {
  return (
    <div className="text-center mt-10">

      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-3">
        <FaCarSide className="text-[#0A66C2]" />
        Welcome to Parking App
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Fast, secure and convenient airport parking.
      </p>

      <Link to="/booking">
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 flex items-center gap-2 mx-auto">
          <FaClock /> Book Now
        </button>
      </Link>

      {/* Why Choose Us */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex justify-center items-center gap-2">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-lg shadow bg-white">
            <FaShieldAlt className="text-[#0A66C2] text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Secure Parking</h3>
            <p className="mt-2 text-gray-600">
              24/7 CCTV, gated entry and full security coverage.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow bg-white">
            <GiTakeMyMoney className="text-[#0A66C2] text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Affordable Prices</h3>
            <p className="mt-2 text-gray-600">
              Best rates for daily, weekly and long-term parking.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow bg-white">
            <FaClock className="text-[#0A66C2] text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Easy Online Booking</h3>
            <p className="mt-2 text-gray-600">
              Book in seconds with instant confirmation.
            </p>
          </div>

        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex justify-center items-center gap-2">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 rounded-lg shadow bg-white text-left flex gap-4 items-start">
            <FaCarSide className="text-[#0A66C2] text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Park and Ride</h3>
              <p className="mt-2 text-gray-600">
                Safe and economical parking with shuttle transfer to airport.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow bg-white text-left flex gap-4 items-start">
            <FaHandshake className="text-[#0A66C2] text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Meet and Greet</h3>
              <p className="mt-2 text-gray-600">
                Premium valet parking service right at the terminal.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-blue-600 text-white rounded py-10">
        <h2 className="text-3xl font-bold">Ready to Book Your Parking?</h2>
        <p className="mt-3 text-lg">We guarantee the best service and best price.</p>

        <Link to="/booking">
          <button className="mt-6 bg-white text-[#0A66C2] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 flex items-center gap-2 mx-auto">
            Book Your Spot Now →
          </button>
        </Link>
      </div>

    </div>
  );
}
