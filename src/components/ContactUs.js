import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBAnimation } from 'mdbreact';
import style from "./aboutUs.module.css"


const ContactUs = () => {
return (
 
  <div className={style.contactUs}>
  <MDBContainer >
  <MDBRow className={style.form}>
    <MDBCol className={style.form} md="6">
      <form className={style.form} >
        <p style={{color: "white"}}className="h3 text-center mb-4">Write to Us</p>
        <div className="white-text">
          <MDBInput required style={{color: "white"}} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput required style={{color: "white"}} className={style.input} label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput required style={{color: "white"}} label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput required style={{color: "white"}} type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <br></br>
        <div className="text-center">
        <button className= {style.button}  type="submit">Send</button>
        </div>
       
      </form>
     
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div>

);
};

export default ContactUs;