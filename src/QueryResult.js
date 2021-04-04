import React from 'react';
import style from './result.module.css';

const QueryResult = ({query,avg,sentiment}) => {
    return(
        <div className={sentiment==="positive"? style.positiveResult : style.negativeResult}>
            <h1 className={style.resultText}>{query}</h1>
            <br></br>
            <p className={style.resultText}>{sentiment}</p>
            <p className={style.resultText} >{avg}</p>
            
        </div>
    );
}

export default QueryResult;