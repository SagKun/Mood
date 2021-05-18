import React from 'react';
import style from './result.module.scss';
import { Resizable } from "re-resizable";
import AnimatedText from "./AnimatedText"

let options = {
    size: "small", // large images only
    language: "he", // French
    safe: true, // force safe search on
    limit: "1" // white cats only please
}

const QueryResult = ({query,avg,sentiment}) => {
    return(
        <Resizable className={sentiment==="Positive"? style.positiveResult : style.negativeResult}>
        
            <AnimatedText className={style.resultText} text={query} />
            <br></br>
            <p className={style.resultTextSentiment}>{ sentiment==="Negative"? "סנטימנט  שלילי ":"סנטימנט  חיובי" }</p>
            <p className={style.resultTextSentiment} >{ " רמת בטחון: " + avg*100+ "%"}</p>
           
            
        
        </Resizable>
    );
}

export default QueryResult;