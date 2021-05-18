import TextyAnim from 'react-typical';
import * as React from 'react';
import * as ReactDOM from 'react-dom';




class AnimatedText extends React.Component{

    render(){
    return  <TextyAnim
        type="mask-top"
        onEnd={(type) => {
          // tslint:disable-next-line
          console.log(type);
        }}
      >
        {this.props.text}
      </TextyAnim>
    
      
    }
    }
    export default AnimatedText;
    