import { FaCalendarAlt } from "react-icons/fa";

export default function SelectDates({
  fromDate,
  toDate,
  fromTime,
  toTime,
  fromPeriod,
  toPeriod,
  setFromDate,
  setToDate,
  setFromTime,
  setToTime,
  setFromPeriod,
  setToPeriod,
  scrollToTop,
  setError,
  onNext
}) {
  return (
    <div className="max-w-xl mx-auto p-6 shadow bg-white rounded-lg">

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaCalendarAlt className="text-[#0A66C2]/80 text-2xl" />
        Select Dates & Time
      </h2>

      {/* FROM DATE & TIME */}
      <label className="text-gray-700 font-semibold">From</label>
      <div className="flex gap-3 mt-1 mb-4">
        <input
          type="date"
          className="border p-3 rounded w-1/2"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <input
          type="time"
          className="border p-3 rounded w-1/3"
          value={fromTime}
          onChange={(e) => setFromTime(e.target.value)}
        />

        <select
          className="border p-3 rounded w-1/4"
          value={fromPeriod}
          onChange={(e) => setFromPeriod(e.target.value)}
        >
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>

      {/* TO DATE & TIME */}
      <label className="text-gray-700 font-semibold">To</label>
      <div className="flex gap-3 mt-1 mb-4">
        <input
          type="date"
          className="border p-3 rounded w-1/2"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />

        <input
          type="time"
          className="border p-3 rounded w-1/3"
          value={toTime}
          onChange={(e) => setToTime(e.target.value)}
        />

        <select
          className="border p-3 rounded w-1/4"
          value={toPeriod}
          onChange={(e) => setToPeriod(e.target.value)}
        >
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>

      <button
        onClick={() => {
            if (!fromDate || !fromTime || !toDate || !toTime) {
            setError("Please select both start and end date/time.");
            scrollToTop();
            return;
            }
            setError("");
            onNext();
        }}
        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
        Next
      </button>
    </div>
  );
}
