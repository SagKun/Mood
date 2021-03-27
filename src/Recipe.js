import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <p>{calories}</p>
        </div>
    );
}

export default Recipe;