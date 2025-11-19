import { parkingOptionsData } from "../constants";
import { FaClock, FaCarSide, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ParkingPackages() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Parking Packages
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-3">
        {parkingOptionsData.map((option) => (
          <div
            key={option.id}
            className="border p-6 rounded-lg shadow bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              {option.title.includes("Park") ? (
                <FaCarSide className="text-[#0A66C2]/80 text-3xl" />
              ) : (
                <FaHandshake className="text-[#0A66C2]/80 text-3xl" />
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center">{option.title}</h3>

            {/* Description */}
            <ul className="mt-3 text-gray-600 space-y-1 text-center">
              <li>{option.desc1}</li>
              <li>{option.desc2}</li>
            </ul>

            {/* Price */}
            <p className="text-2xl font-bold mt-4 text-center text-[#0A66C2]">
              {option.price}
            </p>
          </div>
        ))}
      </div>

      <Link to="/booking">
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 flex items-center gap-2 mx-auto">
          <FaClock /> Book Now
        </button>
      </Link>
    </div>
  );
}
