import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const StepOne = (props) => {
  const { currentStep } = props;

  const renderContent =
    currentStep === 1 ? (
      <div className='form-group'>
        <div className='input-container'>
          <FontAwesomeIcon icon={faUser} size='lg' className='icon' />
          <input
            className='step form-control'
            id='name'
            name='name'
            type='text'
            placeholder='Fill with your name'
            value={props.name} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>
      </div>
    ) : (
      ""
    );

  return <div>{renderContent}</div>;
};
