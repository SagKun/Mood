import React, { useState, useEffect } from 'react';
import style from './result.module.css'
import {MDBAnimation } from "mdbreact";


  
const RandomFact = () => {
  const [seconds, setSeconds] = useState(0);
  const loadingFacts = [
    '"הלב אינו מבקש את רשותך כדי להפתיע אותך." ~ דיוגנס',
    '"הרגשות הראשונים הם תמיד היותר טבעיים." ~ מאדאם דה סבינייה',
    '"רגשות מדרבנים אותנו לחשוב." ~ מאדאם דה סטאל',
    '"גם הרגש הכואב ביותר סופו להסתיים, אם רק נותנים לו להיות." ~ שחר בן פורת',
    '"ככל שהרגשות הנעימים יותר ערניים, אנו יותר מאושרים." ~ אמילי דה שאטלה',
    '"האם אדם היושב ליד האח יכול להבין את מי שקופא בקור?" ~ אלכסנדר סולזניצין',
    '"שלהבת הרגשות מעולם לא האירה את ההבנה אלא סנוורה אותה." ~ תומאס הובס',
    'האוהב חייב לדעת להביע את רגשותיו, ולעורר את הנועם, הרוך והתשוקה." ~ מולייר',
    '"אני חורץ משפט על מצבי על פי רגשותיי ולא על פי מחשבתי והגיוני." ~ מישל דה מונטן',
    '"את הרגשות העמוקים ביותר אי אפשר להביע במילים. אפשר רק לרמוז עליהם." ~ טקאשי מצואוקה',
    '"רגש הוא עובדה, אנרגיית חיים שקיימת בנו. כשאנו מתווכחים עמה, היא רק מתעצמת ואנחנו נותרים מתוסכלים." ~ אילת דה פיצ׳וטו',
    '"יש תמיד משהו מגוחך ברגשות של אנשים שאותם מישהו הפסיק לאהוב." ~ אוסקר ויילד',
    '"ללב יש את הסיבות שלו, שעליהן השכל לא יודע כלום." ~ בלז פסקל',
    '"שנים חסומות, שנים בלי רגש." ~ יהלי סובול',
    '"להקשיב ללב, הוא הכי חכם." ~ שלום חנוך',
    '"אנשים ישכחו מה אמרת, אנשים ישכחו מה עשית, אבל אנשים לעולם לא ישכחו כיצד גרמת להם להרגיש." ~ מאיה אנג\'לו',
    '"אנשים שחושבים שהם יכולים לשלוט על רגשותיהם השליילים ולהביע אותם בזמן שהם יבחרו, משלים את עצמם." ~ פ.ד.',
    '"מחצית מהטעויות שלנו נובעות מפני שהרגש שלנו פועל כאשר עלינו לחשוב, והשכל שלנו פועל כאשר עלינו להרגיש." ~ ג\'ון צ\'רטון קולינס',
    
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
      
      
       <MDBAnimation type="bounceInRight"  >
      <p className="grey-text w-responsive mx-auto mb-5">{randomFact}</p>
      </MDBAnimation>
    </div>
  );
};

export default RandomFact;