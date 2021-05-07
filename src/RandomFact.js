import React, { useState, useEffect } from 'react';
import style from './result.module.scss'
import {MDBAnimation } from "mdbreact";


  
const RandomFact = () => {
  const [seconds, setSeconds] = useState(0);
  const loadingFacts = [
    "משפט בלה בלה בלה"
    ,"לא כיף לי לחכות"
    ,"אנשים לא מסכימים על כלום",
    "לא משנה מה תעשה אנשים לא מסכימים על כלום",
    "אולי ביבי יעזוב את בלפור"
  ]
  const[randomFact,setRandomFact]=useState(loadingFacts[0]);




const getRandomFacts = () => {
    setRandomFact(loadingFacts[Math.floor(Math.random()*loadingFacts.length)]);
  }
  useEffect(() => {
    const interval = setInterval(() => {
    getRandomFacts();
      setSeconds(seconds => seconds + 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.factStyle2}>
       {getRandomFacts}
       {console.log(randomFact)}
       <MDBAnimation type="bounceInRight"  >
      <p className="grey-text w-responsive mx-auto mb-5">{randomFact}</p>
      </MDBAnimation>
    </div>
  );
};

export default RandomFact;