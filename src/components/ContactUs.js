import React,{useEffect,useRef,useState,useLayoutEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBAnimation } from 'mdbreact';
import style from "./aboutUs.module.css"
import { Modal } from 'react-responsive-modal';

const ContactUs = () => {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[subject,setSubject] = useState('');
  const[message,setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const onCloseModal = () => (setOpen(false));

  function handleName(event) {
     
       setName(event.target.value);
   
}

function handleEmail(event) {
 
   setEmail(event.target.value);

}

function handleSubject(event) {

   setSubject(event.target.value);

}
function handleMessage(event) {
  
   setMessage(event.target.value);

}
const submitMail = e => {
  e.preventDefault();
  console.log( {"name":`${name}`,"email":`${email}`,"subject":`${subject}`,"message":`${message}`});
  sendMail();
}

  const sendMail = async () => {
    
    const response =  await fetch(
      "https://europe-west3-heb-sentiment-analysis-engine.cloudfunctions.net/contact-us",
      {
        method: "POST",
        headers: {
          "Access-Control-Request-Method": "POST",
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify({name:`${name}`,email:`${email}`,subject:`${subject}`,message:`${message}`}),
        maxAge: 3600
        //"mode": "cors",
      }
    );
   
      const data = await response.text();
      setOpen(true);
      console.log("email response",data);
      if(response.status===200){
        return(
          <div>
        <Modal  open={open} onClose={onCloseModal} center >
          <h2 style={{textAlign:"center"}}> ההודעה שלך נשלחה בהצלחה</h2>
          <br/>
          <br/>
          <p>
            ההודעה שלך התקבלה אצלנו במערכת, נחזור אליך בהקדם.
          </p>
        </Modal>
        </div>
        )
        
      }
      
      else{
        return(
          <div>
          <Modal  open={open} onClose={onCloseModal} center>
          <h2 style={{textAlign:"center"}}>  משהו השתבש ☹️</h2>
          <br/>
          <br/>
          <p>
            שליחת הודעה נכשלה,נסה מאוחר יותר או שלח מייל ל: hebrewsentimentaeteam@gmail.com.
          </p>
        </Modal>
        </div>
        )
       
      }
     
  };

  return (
 
  <div className={style.contactUs}>
  <MDBContainer >
  <MDBRow className={style.form}>
    <MDBCol className={style.form} md="6">
      <form onSubmit = {submitMail} className={style.form} >
        <p style={{color: "white"}}className="h3 text-center mb-4">Write to Us</p>
        <div className="white-text">
          <MDBInput onInput={handleName} required style={{color: "white"}} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput required  onInput={handleEmail} style={{color: "white"}} className={style.input} label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput required onInput={handleSubject} style={{color: "white"}} label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput required  onInput={handleMessage} style={{color: "white"}} type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <br></br>
        <div className="text-center">
        <button className= {style.button}  type="submit" >Send</button>
        </div>
       
      </form>
     
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div>

);
};

export default ContactUs;