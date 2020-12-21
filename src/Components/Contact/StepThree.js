import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export const StepThree = (props) => {
  const { currentStep } = props;

  const renderContent =
    currentStep === 3 ? (
      <div className='form-group'>
        <div class='input-container'>
          <FontAwesomeIcon icon={faComment} size='lg' class='icon' />
          <input
            className='step form-control'
            id='message'
            name='message'
            type='text'
            placeholder='Now write your awesome message :)'
            value={props.message} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
        </div>
      </div>
    ) : (
      ""
    );

  return <div>{renderContent}</div>;
};
