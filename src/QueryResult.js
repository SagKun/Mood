import React from 'react';
import style from './result.module.scss';
import { Resizable } from "re-resizable";

import Typing from 'react-typing-animation';

let options = {
    size: "small", // large images only
    language: "he", // French
    safe: true, // force safe search on
    limit: "1" // white cats only please
}

class QueryResult extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
      return this.props.sentiment != nextProps.sentiment && this.props.avg != nextProps.avg && this.props.query != nextProps.query;
    }
    
    render(){
    return <Resizable className={this.props.sentiment==="Positive"? style.positiveResult : style.negativeResult}>
        <Typing startDelay={1100}>
        <h1 className={style.resultText}>{this.props.query}</h1> 
        <br></br>
        <p className={style.resultTextSentiment}>{ this.props.sentiment==="Negative"? "סנטימנט  שלילי ":"סנטימנט  חיובי" }</p>
        <p className={style.resultTextSentiment} >{ " רמת בטחון: " + this.props.avg*100+ "%"}</p>
        </Typing>
       
        
    
    </Resizable>
        
      
    }
    }

export default QueryResult;


