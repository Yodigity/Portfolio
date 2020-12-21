import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

export const ForwardArrow = (props) => {
  const { next } = props;
  return (
    <div className='right-nav-arrow' style={{ margin: "auto 1.5em auto 0" }}>
      <Link to={next}>
        <FontAwesomeIcon icon={faArrowRight} size='lg' />
      </Link>
    </div>
  );
};
