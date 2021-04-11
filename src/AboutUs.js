import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon,MDBAnimation } from "mdbreact";
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import saghi from "./resources/saghi.jfif"
import or from "./resources/or.jfif"
import ilan from "./resources/ilan.jpg"
import style from './aboutUs.module.css';
const AboutUs = () => {
return (
    <div>
     <Particles className="particles" height="150vh" width="80vw" params={particlesConfig} />  
     <br></br>
     <br></br>
     <div>

     <MDBAnimation type="fadeInRight" delay=".5s">
    <MDBCard className={style.aboutUs}>
        <MDBCardBody >
          <h2 className="h1-responsive font-weight-bold my-5">
            צוות הפרוייקט
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            האתר נוצר במסגרת פרוייקט הסוף של אור ושגיא במסגרת תואר ראשון למערכות מידע במסלול בינה מלאכותית באוניברסיטת חיפה,בהנחייתו של פרופסור אילן שמשוני.
          </p>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={saghi}
                style={{width: 200,height: 200}}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">שגיא קונגורוב</h5>
              <p className="text-uppercase blue-text">מפתח</p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img  
                src={or}
                style={{width: 200,height: 200}}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <div>
              <h5 className="font-weight-bold mt-4 mb-3">אור יגול</h5>
              <p className="text-uppercase blue-text">מפתח</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
              </div>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={ilan}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">פרופ' אילן שמשוני</h5>
              <p className="text-uppercase blue-text">מרצה בחוג למערכות מידע</p>
              <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </MDBAnimation>
      </div>
      </div>
  );
}

export default AboutUs;