import React from 'react';
import style from './result.module.css';

const QueryResult = ({query,avg,sentiment}) => {
    return(
        <div className={style.result}>
            <h1 className={style.resultText}>{query}</h1>
            <p className={style.resultText}>{avg}</p>
            <p className={style.resultText}>{sentiment}</p>
        </div>
    );
}

export default QueryResult;