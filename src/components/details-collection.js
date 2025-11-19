import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export default function DetailsCollection({ name, phone, email, setName, setPhone, setEmail, scrollToTop, setError, onNext, onBack }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto">
      
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaUser className="text-[#0A66C2]/80 text-2xl" />
        Your Details
      </h2>

      <div className="flex items-center gap-2 border p-3 rounded mb-4">
        <FaUser className="text-[#0A66C2]/80" />
        <input
          type="text"
          placeholder="Full Name"
          className="flex-1 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 border p-3 rounded mb-4">
        <FaPhone className="text-[#0A66C2]/80" />
        <input
          type="tel"
          placeholder="Phone Number"
          className="flex-1 outline-none"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 border p-3 rounded mb-4">
        <FaEnvelope className="text-[#0A66C2]/80" />
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onBack} className="px-6 py-2 border border-gray-500 text-gray-700 rounded">
          Back
        </button>

       <button
            onClick={() => {
                if (!name || !phone || !email) {
                setError("Please fill all personal details.");
                scrollToTop();
                return;
                }
                setError("");
                onNext();
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
            Next
        </button>
      </div>

    </div>
  );
}
