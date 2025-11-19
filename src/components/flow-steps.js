export default function FlowSteps({ step }) {
  const steps = [
    { id: 1, label: "Select Dates" },
    { id: 2, label: "Select Parking" },
    { id: 3, label: "Enter Details" },
    { id: 4, label: "Make Payment" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap max-w-3xl mx-auto mb-10">
      {steps.map((s, index) => (
        <div key={s.id} className="flex items-center">

          <div
            className={`
              flex items-center justify-center shrink-0 rounded-full font-bold text-white
              w-8 h-8 text-xs
              sm:w-9 sm:h-9 sm:text-sm
              max-w-[40px] max-h-[40px]
              ${step === s.id ? "bg-blue-600" : step > s.id ? "bg-green-500" : "bg-gray-300"}
            `}
          >
            {s.id}
          </div>

          <div className="text-xs sm:text-sm font-medium whitespace-nowrap max-[840px]:hidden pl-2">
            {s.label}
          </div>

          {index !== steps.length - 1 && (
            <div
              className={`
                shrink-0 rounded
                ml-2 sm:ml-3
                h-1 sm:h-1
                w-10 sm:w-14
                max-w-[50px]
                ${step > s.id ? "bg-green-500" : "bg-gray-300"}
              `}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
