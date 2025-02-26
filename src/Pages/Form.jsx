import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Step1 from "../Component/Step1";
import Step2 from "../Component/Step2";
import Step3 from "../Component/Step3";
import Step4 from "../Component/Step4";
import Step5 from "../Component/Step5";

const Form = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  

  return (
   <>
   
      

      {step === 1 && (
        <div>
          <Step1 step={step} nextStep={nextStep} prevStep={prevStep}/>
          
        </div>
      )}

      {step === 2 && (
        <div>
          <Step2 step={step} nextStep={nextStep} prevStep={prevStep}/>
         
        </div>
      )}

      {step === 3 && (
        <div>
          <Step3 step={step} nextStep={nextStep} prevStep={prevStep}/>
          
        </div>
      )}

      {step === 4 && (
        <div>
          <Step4 step={step} nextStep={nextStep} prevStep={prevStep}/>
          
        </div>
      )}

      {step === 5 && (
        <div>
          <Step5 step={step} nextStep={nextStep} prevStep={prevStep}/>
          
        </div>
      )}
</>
    
  );
};

export default Form;
