import React from 'react';
import style from './result.module.css';
import "./Trends.css"

import { MDBAnimation } from "mdbreact";



class Trends extends React.Component{
   
    // shouldComponentUpdate(nextProps, nextState) {
    //   return this.props.number != nextProps.number && this.props.sentiment != nextProps.sentiment && this.props.avg != nextProps.avg && this.props.query != nextProps.query;
    // }

    constructor(props) {
      super(props)

      
  }
    
    render(){
        
    return (
        <MDBAnimation type="fadeIn">
      
        <div >
        <ul  className="bg-bubbles">
         {this.props.trends.map(trend => (<li onClick={this.props.fn}>{trend}</li>))} 
        </ul>
        </div>
         
        </MDBAnimation>  
    )
       
        
        
       
        
    
   
        
      
    }
    }

export default Trends;


