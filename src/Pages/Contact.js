import React from "react";
import { ContactForm } from "../Components/Contact/ContactForm";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";

export const Contact = () => {
  return (
    <div>
      <BackArrow prev='/portfolio' />
      <h1>Get In Touch!</h1>
      <ContactForm />
      <ForwardArrow next='/' />
    </div>
  );
};
