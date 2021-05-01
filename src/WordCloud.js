import React, { Component} from 'react';
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import style from './result.module.css';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { MDBAnimation } from "mdbreact";
import { Resizable } from "re-resizable";
class WordCloud extends React.Component{

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
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [30, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 5,
    rotations: 3,
    rotationAngles: [-30, 30],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 3000
  };

  const callbacks = {
    getWordTooltip: (word) =>
      `המילה "${word.text}" הופיעה ${word.value} פעמים.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver:  getCallback("onWordMouseOver") 
  };


   
    return(
      
      <Resizable className={style.cloudContainer}>
        <ReactWordcloud  callbacks={callbacks} words={this.props.words} options={options} />
      </Resizable>
      
  ) 


    
  
}
}
export default WordCloud;
