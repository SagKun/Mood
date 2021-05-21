import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBAnimation } from 'mdbreact';
import style from "./aboutUs.module.css"

const ContactUs = () => {
return (
  <MDBAnimation type="fadeInRightBig" delay=".3s">
  <div className={style.contactUs}>
  <MDBContainer >
  <MDBRow className={style.form}>
    <MDBCol className={style.form} md="6">
      <form className={style.form} >
        <p className="h3 text-center mb-4">Write to Us</p>
        <div className="grey-text">
          <MDBInput  label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="primary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div>
  </MDBAnimation>

);
};

export default ContactUs;