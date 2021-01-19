import React, { useState } from "react";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";

export const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",

    currentStep: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const prevStep = () => {
    if (state.currentStep > 1 && state.currentStep <= 3) {
      setState({ ...state, currentStep: state.currentStep - 1 });
      console.log(state);
    }
  };

  const nextStep = () => {
    return state.currentStep < 3
      ? setState({ ...state, currentStep: state.currentStep + 1 })
      : null;
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className='contactForm'>
      <form onSubmit={() => handleSubmit()} style={{ margin: "2em 0 0 0" }}>
        <StepOne
          currentStep={state.currentStep}
          name={state.name}
          handleChange={handleChange}
        />
        <StepTwo
          currentStep={state.currentStep}
          email={state.email}
          handleChange={handleChange}
        />
        <StepThree
          currentStep={state.currentStep}
          message={state.message}
          handleChange={handleChange}
        />
      </form>

      <div className='step-nav-buttons'>
        {state.currentStep > 1 && state.currentStep <= 3 ? (
          <button className='nav-step' onClick={() => prevStep()}>
            Prev
          </button>
        ) : (
          ""
        )}

        {state.currentStep < 3 ? (
          <button className='nav-step' onClick={() => nextStep()}>
            Next
          </button>
        ) : (
          ""
        )}
        {state.currentStep === 3 ? (
          <button
            className='nav-step'
            type='submit'
            onSubmit={() => handleSubmit()}
          >
            Send
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
