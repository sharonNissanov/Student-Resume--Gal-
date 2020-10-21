import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';



const MilitaryService = () => (
  
 <div className="MilitaryService" > 
 <Segment raised stacked style={{backgroundColor:"black", textAlign: "left", }} >  
    <Placeholder style={{color:"white"}} inverted >
    <Placeholder.Header  style={{color:"white", fontWeight: "bold"}}> 
      <Placeholder.Line /> Mandatory and Career service
      <br></br>
        2011 - 2015
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>
    Service as an "Iron Dome" level A & B radar technician and team leader. 
    <br></br>
    Graduated rank as Sergeant Major
    </Placeholder.Paragraph>
  </Placeholder>
  </Segment>
 </div>
)

export default MilitaryService







