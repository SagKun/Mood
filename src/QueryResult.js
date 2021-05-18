import React from 'react';
import style from './result.module.scss';
import { Resizable } from "re-resizable";
import { Container, Row, Col,setConfiguration, Visible, Hidden } from 'react-grid-system';

import Typing from 'react-typing-animation';
setConfiguration({ gridColumns: 10});
const searched ="המונח שחיפשת:"  ;

class QueryResult extends React.Component{
   
    shouldComponentUpdate(nextProps, nextState) {
      return this.props.sentiment != nextProps.sentiment && this.props.avg != nextProps.avg && this.props.query != nextProps.query;
    }
    
    render(){
        var delaySum=0;
    return <Container  fluid className={this.props.sentiment==="Positive"? style.positiveResult : style.negativeResult}>
        <br />
        <br />
        <Row  style={{textAlign:"center"}} >
            <Col  style={{alignItems:"center"}}>
            <Typing startDelay={1100} >
            <h1 style={{color:"white",textAlign:"left",fontFamily:"OCR A"}}>{searched} </h1>
            </Typing>
            </Col>
            <Col  style={{textAlign:"center"}}>
            <Typing startDelay={3500,delaySum=3500} >
            <h1 style={{color:"white",textAlign:"right",fontFamily:"OCR A"}}>{this.props.query}</h1> 
            </Typing>
            </Col>
            <Col ></Col>
            <Col ></Col>
            
        </Row>
        <br />
        <br />
        <br />
        <Row >
            <Col >

            </Col>
            <Col >

            </Col>
            <Col >
            <Typing startDelay={this.props.query.length*200+delaySum,delaySum+=this.props.query.length*200} >
            <h1 style={{color:"white",textAlign:"left",fontFamily:"OCR A"}}>מספר תוצאות:</h1>
            </Typing>
            </Col>
            <Col >
            <Typing startDelay={delaySum+2000,delaySum+=2000} >
            <h1 style={{color:"white",textAlign:"right",fontFamily:"OCR A"}}>73</h1>
            </Typing>
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row >
        <Col > 
        <Typing startDelay={delaySum+1000,delaySum+=1000} >
        <h1 style={{color:"white",textAlign:"left",fontFamily:"OCR A"}}>סיווג:</h1>
        </Typing>
        </Col>
        <Col > 
        <Typing startDelay={delaySum+1500,delaySum+=1500} > 
        <h1 style={{color:"white",textAlign:"right",fontFamily:"OCR A"}}>{ this.props.sentiment==="Negative"? "סנטימנט  שלילי ":"סנטימנט  חיובי" }</h1>
        </Typing>
        </Col>
        <Col ></Col>
        <Col > </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row >
        <Col ></Col>
        <Col ></Col>
        <Col ></Col>
            
            <Col >
            <Typing startDelay={delaySum+2500,delaySum+=2500} >  
            <h1 style={{color:"white",textAlign:"left",fontFamily:"OCR A"}}>רמת בטחון:</h1>
            </Typing>
            </Col>
            <Col >
            <Typing startDelay={delaySum+2000,delaySum+=2000} >   
            <h1 style={{color:"white",textAlign:"right",fontFamily:"OCR A"}}>{ this.props.avg*100+ "%"}</h1>
            </Typing>
            </Col>
           
        </Row>
        <br />
        <br />
        </Container>
        
        
       
        
    
   
        
      
    }
    }

export default QueryResult;


