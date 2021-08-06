import React from 'react';
import style from './result.module.css';

import {MDBCard} from "mdbreact";



  class Tweet extends React.Component{
    
    

   
    render(){

     

    return(
            <MDBCard   onClick={()=> window.open(this.props.url, "_blank")} style = {{backgroundColor: `${(this.props.sentiment==="Negative")? "#56241f":"#35561f"}`,color:"white",borderRadius:"10px"}} className={style.tweet}>
            <p  className="p-responsive font-weight-normal my-1">{this.props.text}</p>
            <p  className="p-responsive font-weight-normal my-2"> {this.props.sentiment==="Negative"? "סנטימנט שלילי ":"סנטימנט חיובי"}</p>
            <p  className="p-responsive font-weight-normal my-2" >{ "רמת בטחון: "+this.props.score*100 +"%" }</p>
            </MDBCard>
          
        
    );
}
}

export default Tweet;