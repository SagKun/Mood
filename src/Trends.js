import React from 'react';
import style from './result.module.css';
import "./Trends.css"





class Trends extends React.Component{
   
    // shouldComponentUpdate(nextProps, nextState) {
    //   return this.props.number != nextProps.number && this.props.sentiment != nextProps.sentiment && this.props.avg != nextProps.avg && this.props.query != nextProps.query;
    // }

    constructor(props) {
      super(props)

      
  }
    
    render(){
        
    return (
        <div  >
 
        <ul  class="bg-bubbles">
         {this.props.trends.map(trend => (<li onClick={this.props.fn}>{trend.Trend}</li>))} 
        </ul>
 
       
        </div>
    )
       
        
        
       
        
    
   
        
      
    }
    }

export default Trends;


