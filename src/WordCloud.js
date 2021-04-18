import React, { Component } from 'react';
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import style from './result.module.css';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
class WordCloud extends React.Component{
render(){
function getCallback(callback) {
    return function (word, event) {
      
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      
      const text = select(element);
      
      
      text
        .on("click", () => {
          if (isActive) {
            window.open(`https://twitter.com/search?q=${word.text}`, "_blank");
          }
        })
        .transition()
        .attr("background", "white")
        .attr("font-size", isActive ? "300%" : "100%")
        .attr("text-decoration", isActive ? "underline" : "none");
    };
  }

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 60],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 1,
    rotations: 3,
    rotationAngles: [10, 30],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };

  const callbacks = {
    getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
  };


    
    return(
        <div className={style.cloudResult} style={{ width: "100%", height: "100%" }}>
        <ReactWordcloud  callbacks={callbacks} words={this.props.words} options={options} />
        </div>
  ) 
    
  
}
}
export default WordCloud;
