import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';



const Education = () => (
  
 <div className="Education" > 
 <Segment raised stacked style={{backgroundColor:"black", textAlign: "left", }} >  
    <Placeholder style={{color:"white"}} inverted >Education
    <Placeholder.Header  style={{color:"white", fontWeight: "bold"}}> 
      <Placeholder.Line /> 
        Electrical & Electronics engineering / Azrieli College of engineering
        <br></br>
​       2017 - present
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>
    B.Sc. Electrical & Electronics engineering student on fourth year.
    <br></br>
    Specialization in DSP (Digital Signal Processing). 
    </Placeholder.Paragraph>
  </Placeholder>

  <Placeholder style={{color:"white"}} inverted >
    <Placeholder.Header  style={{color:"white", fontWeight: "bold"}}> 
      <Placeholder.Line /> 
      Electronics studies/ ORT Aviation and Aerospace College
      <br></br>
        ​2010 - present

    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>
    Graduated of Air Force Academy
    <br></br>
    <li> Full matriculation majoring in Electronics.</li>
    <li> Technology certificate with specialization in Electronics and Computer science..</li>
    <br></br>

    </Placeholder.Paragraph>
  </Placeholder>

  </Segment>
 </div>
)

export default Education







