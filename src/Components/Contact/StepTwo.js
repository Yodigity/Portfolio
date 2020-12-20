import React from "react";

export const StepTwo = (props) => {
  const { currentStep } = props;

  const renderContent =
    currentStep === 2 ? (
      <div className='form-group'>
        <label htmlFor='email'>email</label>
        <input
          className='form-control'
          id='email'
          name='email'
          type='text'
          placeholder="What's your email?"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into state
        />
      </div>
    ) : (
      ""
    );

  return <div>{renderContent}</div>;
};
