import React from 'react';
import style from './result.module.scss';
import { MDBIcon } from 'mdb-react-ui-kit';

const QueryResult = ({text,score,sentiment}) => {
    return(
        <div className={style.tweet}>
            
            <p  className={style.smiley}>
                  <MDBIcon far icon={sentiment==="Positive"? "smile":"frown"} size="2x" className="white-text" />
                </p>
            <h5 className={style.resultText}>{text}</h5>
            <p className={style.resultTextSentiment}> {sentiment==="Negative"? "סנטימנט שלילי ":"סנטימנט חיובי"}</p>
            <p className={style.resultTextSentiment} >{ "רמת בטחון: "+score*100 +"%" }</p>
        </div>
    );
}

export default QueryResult;