import React from 'react';
import style from './result.module.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const QueryResult = ({text,score,sentiment,date}) => {
    return(
        <div className={style.tweet}>
            
            <p  className={style.smiley}>
                  <MDBIcon far icon={sentiment==="Positive"? "smile":"frown"} size="2x" className="white-text" />
                </p>
            <h5 className={style.resultText}>{text}</h5>
            <p className={style.resultText}> {sentiment}</p>
            <p className={style.resultText} >{score}</p>
        </div>
    );
}

export default QueryResult;