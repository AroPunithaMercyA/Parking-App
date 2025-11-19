export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <div className="bg-white shadow p-6 rounded-lg space-y-4">

        <div>
          <p className="text-gray-600 font-semibold">📞 Mobile</p>
          <a href="tel:+919876543210" className="text-blue-600 text-lg">
            +91 98765 43210
          </a>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">📧 Email</p>
          <a href="mailto:info@parkingapp.com" className="text-blue-600 text-lg">
            info@parkingapp.com
          </a>
        </div>

        <div className="pt-4">
          <a
            href="https://wa.me/919876543210" 
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow w-full block text-center"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
