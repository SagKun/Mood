import React from 'react';
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import style from './result.module.css';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Tooltip from 'react-tooltip-lite';
import "./Cloud.css"
import { WaveTopBottomLoading} from 'react-loadingg';
class WordCloud extends React.Component{

shouldComponentUpdate(nextProps, nextState) {
  return this.props.words != nextProps.words || this.props.state != nextProps.state;
}

render(){
let ogFontSize=10;
function getCallback(callback) {
  
    return function (word, event) {
      
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      
      if(isActive)
      {
        ogFontSize=text.attr("font-size");
      }
     
      text
        .on("click", () => {
          if (isActive) {
            window.open(`https://twitter.com/search?q=${word.text}`, "_blank");
          }
        })
        .transition()
        .duration(0)
        .attr("background", "white")
        .style("font-size", isActive? "400%":ogFontSize)
        .attr("text-decoration", isActive ? "underline overline" : "none");
        
    };
  }

  const options = {
    colors: ["white"],
    enableTooltip: true,
    deterministic: true,
    fontFamily: "OCR A",
    fontSizes: [30, 60],  
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 5,
    rotations: 3,
    rotationAngles: [0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };

  



  const callbacks = {
    getWordTooltip: (word) =>
      `המילה "${word.text}" הופיעה ${word.value} פעמים.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver:  getCallback("onWordMouseOver") 
  };


   if(!this.props.loading)
   return(
    
    <div className={this.props.state==="0"? style.cloudContainer:(this.props.state==="1"? style.posCloudContainer:style.negCloudContainer) }>
      <ReactWordcloud  callbacks={callbacks} words={this.props.words} options={options} />
      
    </div>
   
      
    
    ) 
    else
    return(
      
      <div className={style.cloudContainer}>
        <WaveTopBottomLoading color="white" size="large" />
      </div>
      
    )


    
  
}
}
export default WordCloud;
