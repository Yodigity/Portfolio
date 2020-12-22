import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const StepTwo = (props) => {
  const { currentStep } = props;

  const renderContent =
    currentStep === 2 ? (
      <div className='form-group'>
        <div class='input-container'>
          <FontAwesomeIcon icon={faEnvelope} size='lg' class='icon' />
          <input
            className='step form-control'
            id='email'
            name='email'
            type='email'
            placeholder='Now your email'
            value={props.email} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>
      </div>
    ) : (
      ""
    );

  return <div>{renderContent}</div>;
};
