import React from 'react'
import { Particles  } from "react-particles-js";
import './Semantic/Semantic.css'
import particles from './particles'

const ParticlesBack = () => (
    // <div  className="ParticlesCanvas" >  
    <Particles 
    className="ParticlesCanvas"
    params={particles}/>  
    // </div>
)

export default ParticlesBack