export default function SelectParking({ parkingOptions, selected, setSelected, scrollToTop, setError, onNext, onBack }) {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Choose Parking Option</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {parkingOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelected(option)}
            className={`border p-5 rounded-lg shadow cursor-pointer transition 
            ${selected?.id === option.id ? "border-green-600 shadow-lg bg-green-50" : "border-gray-300"}`}
          >
            <h3 className="text-xl font-semibold">{option.title}</h3>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>{option.desc1}</li>
              <li>{option.desc2}</li>
            </ul>
            <p className="text-lg font-bold mt-3">{option.price}</p>
          </div>
        ))}
      </div>

      {/* Button Row */}
      <div className="flex justify-between mt-6">
        <button 
          onClick={onBack}
          className="px-6 py-2 rounded border border-gray-500 text-gray-700"
        >
          Back
        </button>

        <button
            onClick={() => {
                if (!selected) {
                setError("Please select a parking option.");
                scrollToTop();
                return;
                }
                setError("");
                onNext();
            }}
            className="px-6 py-2 rounded text-white bg-blue-600"
            >
            Next
            </button>
      </div>
    </div>
  );
}
