import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody,MDBAnimation } from "mdbreact";
import { MDBIcon } from 'mdb-react-ui-kit';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import saghi from "./resources/saghi.jfif"
import or from "./resources/or.jfif"
import ilan from "./resources/ilan.jpg"
import style from './aboutUs.module.css';
import 'font-awesome/css/font-awesome.min.css';

const AboutUs = () => {
return (
    <div>
     
     <br></br>
     <br></br>
     <div>

     <MDBAnimation type="fadeInRightBig" delay=".3s">
    <MDBCard className={style.aboutUs}>
    
        <MDBCardBody  >
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
              סטודנט בחוג למערכות מידע במסלול בינה מלאכותית באוניברסיטת חיפה. תחומי עניין: פיתוח תוכנה, Cloud. 
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.linkedin.com/in/saghikun/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="https://twitter.com/KunSaghi" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="https://github.com/SagKun" className="p-2 fa-lg">
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
                 סטודנט בחוג למערכות מידע במסלול בינה מלאכותית באוניברסיטת חיפה. תחומי עניין: Big Data, BI, NLP. 
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.linkedin.com/in/or-yagol/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="https://twitter.com/oryagol" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="https://github.com/oryagol" className="p-2 fa-lg">
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
              <p className="text-uppercase blue-text">מנחה פרוייקט</p>
              <p className="grey-text">
              מרצה בחוג למערכות מידע באוניברסיטת חיפה. תחומי מחקר: כריית נתונים וראייה ממוחשבת.
            
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
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