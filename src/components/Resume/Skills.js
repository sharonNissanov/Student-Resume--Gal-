import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';
import {isMobile} from "react-device-detect";


function Skills() {
  const [chosen_language , setChosen_language] = React.useState(null)
  React.useEffect(() => {

    try{ 
      const chosen_lan = localStorage.getItem("Language");
      if(chosen_lan!==null){ 
        setChosen_language(chosen_lan)
   
      }
    }catch(e){
        console.log(e)
    } 
  },)


  const styles = {

    titleBr:{
      color:"white", textAlign: chosen_language==="English"?"left":"right", wordSpacing:"10px", lineHeight: "0.22", fontSize:isMobile?"22px":"29px",direction:chosen_language==="English"?null :"rtl",
    },
    infoBr:{
      color:"white",textAlign: chosen_language==="English"?"left":"right",  wordSpacing:"5px", lineHeight: "0.7" ,fontSize:isMobile?"15px":"20px",direction:chosen_language==="English"?null :"rtl",
    },
    
  }
  


return (
 

<div className="Skills">
      <br></br> 
      {chosen_language==="English"?
      <div className="Skills">
     <h2 style={styles.titleBr}> My Skills </h2>
     <br></br>
     <h3 style={styles.infoBr} > 
     <li>Programs: C++, FPGA, MATLAB,</li>
      <br></br>
      <li>Radio Frequency</li>
      <br></br>
      <li>Integration</li>
      <br></br>
      <li>Fiber optics</li> 
      <br></br>
      <li>Control M</li>
      <br></br>
      <li>Monitoring</li>
      <br></br>
      <li>Troubleshooting</li>
      <br></br>
      <li>Quick and serf-learner</li>
      <br></br>
      <li>Customer support</li>
      </h3> 
      <br></br>
      </div>
    :
    <div className="Skills"> 
    <h2 style={styles.titleBr}> הכישורים שלי </h2>
    <br></br>
    <h3 style={styles.infoBr} > 
     <li>תוכנות: C++, VHDL, Matlab  </li>
     <br></br>
     <li>Radio Frequency</li>
     <br></br>
     <li>Control M </li>
     <br></br>
     <li>סיבים אופטים</li> 
     <br></br>
     <li>אינטגרציה</li>
     <br></br>
     <li>פתרון בעיות</li>
     <br></br>
     <li>תמיכה טכנית</li>
     <br></br>
     <li>קליטה ולמידה מהירה</li>
     <br></br>
     </h3>
     <br></br>
     </div>
    }
  </div>

  )
}




export default Skills


