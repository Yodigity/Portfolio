import React from "react";

export const StepOne = (props) => {
  const { currentStep } = props;

  const renderContent =
    currentStep === 1 ? (
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          className='form-control'
          id='name'
          name='name'
          type='text'
          placeholder='Fill with your name'
          value={props.name} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into state
        />
      </div>
    ) : (
      ""
    );

  return <div>{renderContent}</div>;
};
