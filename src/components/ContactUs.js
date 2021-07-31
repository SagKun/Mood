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
  const [mailSuccessful, setMailSuccessful] = useState(false);
  const [mailFailed, setMailFailed] = useState(false);
  const onCloseModal = () => (setOpen(false));

  function handleName(event) {
     
       setName(event.target.value);
   
}

const resetForm = () => { 
  document.getElementById("form").reset();
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
function submitMail (e) {
  e.preventDefault();
  
  console.log( {"name":`${name}`,"email":`${email}`,"subject":`${subject}`,"message":`${message}`});
  sendMail();
  setName('');
  setEmail('');
  setSubject('');
  setMessage('');
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
      console.log("email response",data);
      setOpen(true);
      if(response.status===200){
        setMailSuccessful(true);
      }
      else{
        setMailFailed(true);
      }
      
  };

  return (
   
  <div className={style.contactUs}>
   
  <MDBContainer >
  <MDBRow className={style.form}>
    <MDBCol className={style.form} md="6">
      <form id="form" onSubmit = {submitMail} className={style.form}   >
        <p style={{color: "white"}}className="h3 text-center mb-4">Write to Us</p>
        <div className="white-text">
          <MDBInput value={name} onInput={handleName} required style={{color: "white"}} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput  value={email}  required  onInput={handleEmail} style={{color: "white"}} className={style.input} label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput value={subject}  required onInput={handleSubject} style={{color: "white"}} label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput value={message}   required  onInput={handleMessage} style={{color: "white"}} type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <br></br>
        <div className="text-center">
        <button className= {style.button}  type="submit" >Send</button>
        </div>
       
      </form>
     
    </MDBCol>
  </MDBRow>
</MDBContainer>
<Modal  open={open && mailSuccessful} onClose={onCloseModal} center >
    <br/>
    <br/>
    <h2 style={{textAlign:"center"}}> ההודעה שלך נשלחה בהצלחה</h2>
    <br/>
    <br/>
    <p>
      ההודעה שלך התקבלה אצלנו במערכת, נחזור אליך בהקדם.
    </p>
  </Modal>
  <Modal  open={open && mailFailed} onClose={onCloseModal} center>
  <br/>
  <br/>
  <h2 style={{textAlign:"center"}}>  משהו השתבש ☹️</h2>
  <br/>
  <br/>
  <p>
    שליחת הודעה נכשלה,נסה מאוחר יותר או שלח מייל ל: hebrewsentimentaeteam@gmail.com.
  </p>
</Modal>




  </div>

);
};

export default ContactUs;