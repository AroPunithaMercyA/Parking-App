import { useState } from "react";
import SelectDates from "../components/select-dates";
import SelectParking from "../components/select-parking";
import DetailsCollection from "../components/details-collection";
import Payment from "../components/payment";
import FlowSteps from "../components/flow-steps";
import { parkingOptionsData } from "../constants";

export default function Booking() {
  const [step, setStep] = useState(1);

  // DATE + TIME
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  // AM / PM (IMPORTANT!)
  const [fromPeriod, setFromPeriod] = useState("AM");
  const [toPeriod, setToPeriod] = useState("AM");

  // PARKING OPTION
  const [selected, setSelected] = useState(null);

  // PERSONAL DETAILS
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  // Combine into full datetime
  const fullFrom = `${fromDate} ${fromTime} ${fromPeriod}`;
  const fullTo = `${toDate} ${toTime} ${toPeriod}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book Your Parking</h1>

      <FlowSteps step={step} />

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
            {error}
        </div>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <SelectDates
          fromDate={fromDate}
          toDate={toDate}
          fromTime={fromTime}
          toTime={toTime}
          fromPeriod={fromPeriod}
          toPeriod={toPeriod}
          setFromDate={setFromDate}
          setToDate={setToDate}
          setFromTime={setFromTime}
          setToTime={setToTime}
          setFromPeriod={setFromPeriod}
          setToPeriod={setToPeriod}
          scrollToTop={scrollToTop}
          setError={setError}
          onNext={() => setStep(2)}
        />
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <SelectParking
          parkingOptions={parkingOptionsData}
          selected={selected}
          setSelected={setSelected}
          scrollToTop={scrollToTop}
          setError={setError}
          onNext={() => selected && setStep(3)}
          onBack={goBack}
        />
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <DetailsCollection
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          scrollToTop={scrollToTop}
          setError={setError}
          onNext={() => setStep(4)}
          onBack={goBack}
        />
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <Payment
          name={name}
          phone={phone}
          email={email}
          from={fullFrom}
          to={fullTo}
          selected={selected}
          onBack={goBack}
        />
      )}
    </div>
  );
}
