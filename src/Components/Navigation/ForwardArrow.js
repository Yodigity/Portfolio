import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ForwardArrow = () => {
  return (
    <div className='forward-arrow' style={{ margin: "auto 1.5em auto 0" }}>
      <FontAwesomeIcon icon={faArrowRight} size='lg' />
    </div>
  );
};
