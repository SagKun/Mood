import React from 'react';
import './App.css';
import OGParticles from 'react-particles-js';




class Particles extends React.Component{
   
  
    render(){
        
    return   <OGParticles id="particles-js"
            
            params={{
                particles: {
                    number: {
                        value: 5,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#1f5156'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: false
                        }
                    },
                    line_linked: {
                        enable_auto: true,
                        distance: 80,
                        color: "#1f5156",
                        opacity: 0.4,
                        width: 1,
                        condensed_mode: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 600
                        }
                      },
                    size: {
                        value: 3,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 3
                        }
                    },
                    
                    move: {
                        speed: 0.4
                    }
                 }    
            }}   
        />
     
       
        
        
       
        
    
   
        
      
    }
    }

export default Particles;


