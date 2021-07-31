import React, { useState, useEffect } from 'react';
import './Loader.css'


  
const Loader = () => {
  

  return (
    <div className="box">
  
  <div className="percentage">
  <svg>
    <circle className="shadow" cx="70px" cy="50px" r="50px"></circle>
    <circle className="shadow"cx="70px" cy="50px" r="50px"></circle>
  </svg>
  
  </div>
  </div>
 
  

  );
};

export default Loader;