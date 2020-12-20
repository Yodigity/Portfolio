import React from "react";

export const StepThree = (props) => {
  const { currentStep } = props;

  const renderContent =
    currentStep === 3 ? (
      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <input
          className='form-control'
          id='message'
          name='message'
          type='text'
          placeholder="What's your message?"
          value={props.message} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into state
        />
      </div>
    ) : (
      ""
    );

  return <div>{renderContent}</div>;
};
