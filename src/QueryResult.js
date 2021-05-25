import React from 'react';
import style from './result.module.css';
import { Resizable } from "re-resizable";
import { Container, Row, Col,setConfiguration, Visible, Hidden } from 'react-grid-system';

import Typing from 'react-typing-animation';
setConfiguration({ gridColumns: 10});
const searched ="המונח שחיפשת:"  ;

class QueryResult extends React.Component{
   
    shouldComponentUpdate(nextProps, nextState) {
      return this.props.number != nextProps.number && this.props.sentiment != nextProps.sentiment && this.props.avg != nextProps.avg && this.props.query != nextProps.query;
    }
    
    render(){
        
    return <div   className={this.props.sentiment==="Positive"? style.positiveResult : style.negativeResult}>
        <br />
        <br />  
        <Typing speed={10} startDelay={1500}>
            <h1  className={style.orcaText}>{searched} </h1> 
            <h1  className={style.orcaText}>{this.props.query}</h1> 
        <br />
        <br />
        <br />
            <h1 className={style.orcaText}>מספר תוצאות:</h1>
            <h1 className={style.orcaText}>{this.props.number}</h1>
        <br />
        <br />
        <br />
        <h1 className={style.orcaText}>סיווג:</h1>
        <h1 className={style.orcaText}>{ this.props.sentiment==="Negative"? "סנטימנט  שלילי ":"סנטימנט  חיובי" }</h1>
        <br />
        <br />
        <br />
            <h1 className={style.orcaText}>רמת בטחון:</h1>
            <h1 className={style.orcaText}>{ this.props.avg*100+ "%"}</h1>
        <br />
        <br />
        </Typing>
        </div>
       
        
        
       
        
    
   
        
      
    }
    }

export default QueryResult;


