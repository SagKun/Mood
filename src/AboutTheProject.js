import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer  } from "mdbreact";
import style from './aboutUs.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
import searchImg from './resources/search_image2.jfif'
import uniqueImg from './resources/unique.jfif'
import nnImage from './resources/nn.jfif'

const AboutTheProject = () => {
  return (
    <div>
      <Particles className="particles" height="150vh" width="80vw" params={particlesConfig} />  
     <br></br>
     <br></br>
    <ScrollAnimation  animateIn='bounceInRight' duration={2.5} animateOnce={true}>
    <MDBCard className={style.aboutUs}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
          מה זה?
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBRow>
          
          <MDBCol lg="7">
           
            <h5 className="h4-responsive font-weight-normal text-center my-5">
            "איך המרגש" הוא מנוע חיפוש (כרגע רק לטוויטר) אשר בעיקרו מנתח סנטימנט (רגש) עבור מילות החיפוש ומציע מידע עדכני על "תחושת הציבור" עבור אובייקט ,יישות , אישיות ,נושא או כל דבר שעולה לכם בראש ומדברים עליו בטוויטר.

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
    <MDBCard className={style.aboutUs}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
        מה אנחנו מציעים?
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBRow>
          
          <MDBCol lg="7">
           
            <h4 className="h4-responsive font-weight-normal text-center my-5">
            אנחנו מציעים רובד מידע חדש שלא היה זמין בצורה מונגשת כל כך עד עכשיו.
            "איך המרגש" ייחודי מכיוון שהוא מציע לקהל הרחב ובאופן פתוח וחינמי, ספקטרום חדש של מידע שקשה מאוד להשיג כרגע במרחב הווירטואלי, ועוד יותר במציאות.
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
    <MDBCard className={style.aboutUs}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
        איך עשינו את זה?
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>
        <MDBRow>
          
          <MDBCol lg="7">
           
            <h4 className="h4-responsive font-weight-normal text-center my-5">
            עמלנו רבות על מנת לאסוף אוסף טוויטים (Dataset) איכותי בעברית ולסווג את הסנטימנט של כל טוויט. באמצעות אוסף הטוויטים המסווג אימנו רשת נוירונים (Machine Learning  למי שאוהב Buzz Words) לסווג קטעי טקסט לפי הסנטימנט שלהם ויצרנו מודל מסווג איכותי שהוא לב מנוע החיפוש שלנו.
            </h4>
               
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
    <MDBCard className={style.aboutUs}>
      <MDBCardBody>
        <h2 style={{color:"#4285F4"}} className="h2-responsive font-weight-bold text-center my-5">
        הטכנולוגיות שלנו
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         
        </p>

      <MDBContainer>
      <MDBRow className='row-cols-3 row-cols-lg-5 g-4 g-lg-3'>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="react" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="html5" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="js" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="python" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="css3" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="bootstrap" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="twitter" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="github" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="github" className="blue-text"  size="5x"/>
            </MDBView>
        </MDBCol>
        <MDBCol>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <MDBIcon fab icon="github" className="blue-text"  size="5x"/>
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