import React from 'react';
import style from './result.module.css';

const QueryResult = ({query,avg,sentiment}) => {
    return(
        <div className={sentiment==="Positive"? style.positiveResult : style.negativeResult}>
            <h1 className={style.resultText}>{query}</h1>
            <br></br>
            <p className={style.resultTextSentiment}>{ sentiment==="Negative"? "סנטימנט כללי שלילי ":"סנטימנט כללי חיובי" }</p>
            <p className={style.resultTextSentiment} >{ " רמת בטחון: "+ avg.toFixed(2)*100+"%"}</p>
            
        </div>
    );
}

export default QueryResult;