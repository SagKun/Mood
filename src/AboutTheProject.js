import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer  } from "mdbreact";
import style from './aboutUs.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import searchImg from './resources/search_image2.jfif'
import uniqueImg from './resources/unique.jfif'
import nnImage from './resources/nn.jfif'
import fastTextLogo from './resources/tech/fastText.png'
import bigQuery from './resources/tech/bigquery.png'
import cloud from './resources/tech/cloud.png'
import css3 from './resources/tech/css3.png'
import functions from './resources/tech/functions.png'
import htmlIcon from './resources/tech/html5.png'
import javascript from './resources/tech/javascript.png'
import python from './resources/tech/python.png'
import react from './resources/tech/react.png'
import { html } from "d3-fetch";

const AboutTheProject = () => {
  return (
    <div>
       
     <br></br>
     <br></br>
    <ScrollAnimation  animateIn='bounceInRight' duration={2.5} animateOnce={true}>
    <MDBCard className={style.aboutTheProject}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
        מה האפליקציה עושה?
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBRow>
          
          <MDBCol lg="7">
           
            <h5 className="h4-responsive font-weight-normal text-center my-5">
            Mood הוא מנוע חיפוש חינמי בעברית, אשר מנתח סנטימנט(רגש) ברשת .
בעבור ביטוי, המנוע יאחזר מהטוויטר כמות רבה של ציוצים הכוללים את הביטוי הרלוונטי ולאחר מכן יבצע סיווג בעזרת אלגוריתם בעבור כל ציוץ ויזהה את הסנטימנט שמובע בציוץ.
המנוע בסופו של דבר יחזיר את אחוז הציוצים שהביעו סנטימנט שלילי/חיובי ומידע ויזואלי נוסף לטובת ניתוח של המשתמש.
            </h5>
               
          </MDBCol>
          <MDBCol lg="5" className="h4-responsive font-weight-bold text-center my-5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={searchImg}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </ScrollAnimation>
    
    <br></br>
    <br></br>

    <ScrollAnimation  animateIn='bounceInRight' duration={2.5} animateOnce={true}>
    <MDBCard className={style.aboutTheProject}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
        מה האפליקציה מציעה?
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBRow>
          
          <MDBCol lg="7">
           
            <h4 className="h4-responsive font-weight-normal text-center my-5">
            האפליקציה מנגישה את הדאטה הרב שנצבר ברשתות החברתיות על מנת לזהות את תחושות הציבור הישראלי ואת המגמות השונות. Mood ייחודי בכך שהוא פתוח וחינמי ומציע לציבור הרחב כלי חזק להבנת תחושות ברשת והפקת תובנות מהן.
            </h4>
               
          </MDBCol>
          <MDBCol lg="5" className="h4-responsive font-weight-bold text-center my-5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={uniqueImg}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </ScrollAnimation>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ScrollAnimation  animateIn='bounceInRight' duration={3} animateOnce={true}>
    <MDBCard className={style.aboutTheProject}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
        איך עשינו את זה?
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBRow>
          
          <MDBCol lg="7">
           
            <h4 className="h4-responsive font-weight-normal text-center my-5">
            עמלנו רבות על מנת לאסוף אוסף טוויטים נרחב בשפה העברית הכולל תיוג של כל ציוץ לחיובי או שלילי, כדי לאמן מודל סיווג טקסט המבוסס על רשת נוירונים  שיודע לסווג בצורה איכותית כל ציוץ לרגש חיובי או שלילי.             </h4>
               
          </MDBCol>
          <MDBCol lg="5" className="h4-responsive font-weight-bold text-center my-5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={nnImage}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </ScrollAnimation>


    <ScrollAnimation  animateIn='bounceInRight' duration={3} animateOnce={true}>
    <MDBCard className={style.aboutTheProject}>
      <MDBCardBody style={{width: "100%"}}>
        <h1 style={{color:"#4285F4"}} className="h1-responsive font-weight-bold text-center my-5">
          טכנולוגיות        
        </h1>
        <br></br>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBContainer className={style.container}>
        <MDBRow className="g-5">
          <MDBCol md="4">
            <MDBView waves >
              <img 
                src={css3}
                className="img-fluid"
                alt=""
               
              />
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={htmlIcon}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={javascript}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={react}
                className="img-fluid"
                alt=""
              />
              
            </MDBView >
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={fastTextLogo}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={python}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={cloud}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves> 
              <img
                src={functions}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView waves>
              <img
                src={bigQuery}
                className="img-fluid"
                alt=""
              />
              
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
       
      </MDBCardBody>
    </MDBCard>
    </ScrollAnimation>
    </div>
  );
}

export default AboutTheProject;