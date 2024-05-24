import React, { useState } from 'react';

const MultiStepForm = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(undefined);
  const [buyer, setBuyer] = useState(undefined);
  const [property, setProperty] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [county, setCounty] = useState(undefined);
  const [zipcode, setZipcode] = useState(undefined);
  const [parcel, setParcel] = useState(undefined);
  const [priceWords, setPriceWords] = useState(undefined);
  const [priceNum, setPriceNum] = useState(undefined);



  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    const Step = steps[currentStep];
    return <Step setDate={setDate} setBuyer={setBuyer}
    setProperty={setProperty} setCity={setCity}
    setCounty={setCounty} setZipcode={setZipcode}
    setParcel={setParcel} setPriceWords={setPriceWords}
    setPriceNum={setPriceNum}
    handleNext={handleNext} handlePrev={handlePrev} />;
  };

  const renderProgressIndicator = () => {
    return (
      <div>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`progress-indicator ${index === currentStep ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderProgressIndicator()}
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;