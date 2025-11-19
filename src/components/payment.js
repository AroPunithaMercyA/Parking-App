import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

export default function Payment({ name, phone, email, from, to, selected, onBack }) {

  const redirectToZoho = () => {
    window.location.href = "https://zoho.com/uk/checkout";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto">

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaMoneyBillWave className="text-[#0A66C2]/80 text-2xl" />
        Payment
      </h2>

      <div className="border p-4 rounded mb-4">
        <p><b>Name:</b> {name}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>From:</b> {from}</p>
        <p><b>To:</b> {to}</p>
      </div>

      <div className="border p-4 rounded mb-6 shadow-sm">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          {selected.title}
        </h3>
        <p className="text-xl font-bold mt-2 text-[#0A66C2]">{selected.price}</p>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="px-6 py-2 border border-gray-500 rounded text-gray-700">
          Back
        </button>

        <button
          onClick={redirectToZoho}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center gap-2"
        >
          <FaCheckCircle />
          Pay Now
        </button>
      </div>
    </div>
  );
}
