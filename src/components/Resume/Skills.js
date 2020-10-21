import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';




const Skills = () => (
  
 <div className="Skills" > 
 <Segment raised stacked style={{backgroundColor:"black", textAlign: "left", }} >  
    <Placeholder style={{color:"white"}} inverted >
    <Placeholder.Header  style={{color:"white", fontWeight: "bold"}}> 
      <Placeholder.Line /> MY SKILLS,
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>
    Programs: C++, FPGA, MATLAB,
    <br></br>
    Radio Frequency
    <br></br>
    Integration
    <br></br>
    Fiber optics 
    <br></br>
    Control M
    <br></br>
    Monitoring
    <br></br>
    Troubleshooting
    <br></br>
    Quick and serf-learner
    <br></br>
    Customer support
    </Placeholder.Paragraph>
  </Placeholder>
  </Segment>
 </div>
)

export default Skills




