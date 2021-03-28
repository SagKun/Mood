import React from 'react';
import style from './recipe.module.css';

const QueryResult = ({query,avg,sentiment}) => {
    return(
        <div className={style.recipe}>
            <h1>{query}</h1>
            <p>{avg}</p>
            <p>{sentiment}</p>
        </div>
    );
}

export default QueryResult;