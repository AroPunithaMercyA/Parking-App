export default function FlowSteps({ step }) {
  const steps = [
    { id: 1, label: "Select Dates" },
    { id: 2, label: "Select Parking" },
    { id: 3, label: "Enter Details" },
    { id: 4, label: "Make Payment" },
  ];

  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto mb-10">

      {steps.map((s, index) => (
        <div key={s.id} className="flex items-center w-full">

          {/* Circle */}
          <div
            className={`
              w-10 h-10 flex items-center justify-center rounded-full text-white font-bold
              ${step === s.id ? "bg-blue-600" : step > s.id ? "bg-green-500" : "bg-gray-300"}
            `}
          >
            {s.id}
          </div>

          {/* Label */}
          <div className="ml-2 text-sm font-medium">
            {s.label}
          </div>

          {/* Line */}
          {index !== steps.length - 1 && (
            <div
              className={`
                flex-1 h-1 mx-4 
                ${step > s.id ? "bg-green-500" : "bg-gray-300"}
              `}
            ></div>
          )}
        </div>
      ))}

    </div>
  );
}
