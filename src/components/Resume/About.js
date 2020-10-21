import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';
import {isMobileOnly, isBrowser} from "react-device-detect";


const About = () => (
  
 <div className="About" > 

 <Segment raised stacked style={{backgroundColor:"black", textAlign: "center", }} >  
    <Placeholder style={{color:"white"}} inverted >
    <Placeholder.Header  style={{color:"white", fontWeight: "bold",fontSize : isBrowser? "30px" : null}}> 
      <Placeholder.Line/> Hello,
      <Placeholder.Line  />a bit about me: 
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white", fontSize : isBrowser? "20px" : null }}>
    <br></br>
    I'm an Electrical & Electronics Engineering student at Azrieli College of Engineering Jerusalem, 
    <br></br>
    specialization in DSP (Digital Signal Processing).
    Experienced System Integration Specialist with a 
    <br></br>
    demonstrated history of working in the aviation 

    and aerospace industry.
    <br></br>
    In addittion I have experience as NOC operator with accsses to SFTP, Conrol-M and Centerity.
    <br></br>
    Skilled in Radio Frequency (RF), IT, Fiber Optics, Troubleshooting, Technical support and worked well as
     part of team.
    </Placeholder.Paragraph>
  </Placeholder>
  </Segment>
 </div>
)

export default About