import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';




const WorkEx = () => (
  
 <div className="WorkEx" > 
 <Segment raised stacked style={{backgroundColor:"black", textAlign: "left",}} >  
    <Placeholder style={{color:"white", }} inverted >
    <Placeholder.Header style={{color:"white", fontWeight: "bold"}} > 
      <Placeholder.Line />Work​ experience
      <Placeholder.Line />Network Operation Center / TATA – TCS
      <br></br>
        2019 - present
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>
    NOC operator in charge of monitoring, controlling and
    <br></br> 
    operating computer system, data analysis and troubleshooting. 
    <br></br>
    Access to core systems and communication such as Virtual machines and SFTP. 
    <br></br>
    Certified as operator of Control M and Centerity automation programs – 
    <br></br>
    systems support for application and technical teams.
    <br></br>
    </Placeholder.Paragraph>
{/* ----------------------------------------------- */}

    <Placeholder.Header style={{color:"white", fontWeight: "bold"}} > 

      <Placeholder.Line />  Integrator & Customer support/  ELTA – IAI
      <br></br>
        2015 - 2017
    </Placeholder.Header> 
    <Placeholder.Paragraph  style={{color:"white"}}>


    </Placeholder.Paragraph>
    Experienced System Integration Specialist with demonstrated experience in aviation 
    <br></br>
    and aerospace industry. 
    <br></br>
    Especially of the field of radar system, RF, Fiber optics, System Engineering and Embedded System.
    <br></br>
    Experienced with relevant testis equipment as part of my ongoing role as part of integration team. 
    <br></br>
    In addition, ongoing support for IDF for full troubleshooting support.



  </Placeholder>
  </Segment>
 </div>
)

export default WorkEx