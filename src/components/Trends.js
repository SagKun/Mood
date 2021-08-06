import React from 'react';
import "./Trends.css"
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBAnimation } from "mdbreact";
import ReactTooltip from 'react-tooltip';


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
         <li data-tip="כל בועית מציגה אחד מהנושאים הכי טרנדיים בטווייטר כרגע,<br>  לחיצה על בועית תריץ חיפוש של הערך במערכת שלנו" className="help">
         <MDBIcon   icon="question" size="3x" className="white-text" />
         </li>
        </ul>
        </div>
        <ReactTooltip multiline={true} type="light" effect="float" />
        </MDBAnimation>  
    )
     

        
       
        
    
   
        
      
    }
    }

export default Trends;


