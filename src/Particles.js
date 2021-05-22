import React from 'react';
import './App.css';
import OGParticles from 'react-particles-js';




class Particles extends React.Component{
   
  
    render(){
        
    return   <OGParticles id="particles-js"
            params={{
                particles: {
                    number: {
                        value: 20,
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
                    size: {
                        value: 2,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 3
                        }
                    },
                    line_linked: {
                        enable: true
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


