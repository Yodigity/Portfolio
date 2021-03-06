import React from "react";
import { ContactForm } from "../Components/Contact/ContactForm";
import { Social } from "../Components/Contact/Social";
import { PageWrapper } from "../Components/PageWrapper";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";

export const Contact = () => {
  return (
    <div className='contact'>
      <PageWrapper>
        <BackArrow prev='/portfolio' />
        <header>
          <h1 className='contact-header'>Get In Touch!</h1>
          <p className='contact-text'>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi,
            <br />
            fill up the awesome form below or send an email to{" "}
            <b style={{ display: "inline-flex", alignContent: "baseline" }}>
              {" "}
              email@gmail.com
            </b>
          </p>
        </header>
        <ContactForm />
        <Social />
        <ForwardArrow next='/' />
      </PageWrapper>
    </div>
  );
};
