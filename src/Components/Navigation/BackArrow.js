import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const BackArrow = (props) => {
  const { prev } = props;
  return (
    <div className='back-arrow' style={{ margin: "auto 0 auto 1.5em" }}>
      <Link to={prev}>
        <FontAwesomeIcon icon={faArrowLeft} size='lg' />
      </Link>
    </div>
  );
};
