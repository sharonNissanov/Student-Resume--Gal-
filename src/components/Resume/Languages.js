import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';



const Languages = () => (
  
 <div className="Languages" > 
 <Segment raised stacked style={{backgroundColor:"black", textAlign: "left", }} >  
    <Placeholder style={{color:"white"}} inverted >
    <Placeholder.Header  style={{color:"white", fontWeight: "bold"}}> 
      <Placeholder.Line /> LANGUAGES
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>
    Hebrew: Mother tongue
    <br></br>
    English: High level
    </Placeholder.Paragraph>
  </Placeholder>
  </Segment>
 </div>
)

export default Languages







