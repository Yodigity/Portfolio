import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const BackArrow = () => {
  return (
    <div className='back-arrow' style={{ margin: "auto 0 auto 1.5em" }}>
      <FontAwesomeIcon icon={faArrowLeft} size='lg' />
    </div>
  );
};
