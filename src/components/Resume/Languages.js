import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';
import {isMobile} from "react-device-detect";

function Languages() {
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

  const EnglishLanguages=()=>(
    <div className="Languages">
      <br></br> 
     <h2 style={styles.titleBr}>Languages </h2>
    
     <h3 style={styles.infoBr} > 
  
     <li> Hebrew: Mother tongue</li> 
    <li> English: High level</li>  
    </h3> 
  
  </div>
  )
 
  const HebrewLanguages=()=>(
    <div className="Languages">
      <br></br> 
     <h2 style={styles.titleBr}>שפות </h2>
    
     <h3 style={styles.infoBr} > 
     <li>עברית – שפת אם</li>
     <li>אנגלית – רמה גבוהה</li>

  
    </h3> 
  
  </div>
  )
  
  const styles = {
    titleBr:{
      color:"white",textAlign: chosen_language==="English"?"left":"right", wordSpacing:"10px", lineHeight: "1.0", fontSize:isMobile?"22px":"29px",direction:chosen_language==="English"?null :"rtl",
    },
    infoBr:{
      color:"white",textAlign: chosen_language==="English"?"left":"right",  wordSpacing:"5px", lineHeight: "1.3" ,fontSize:isMobile?"15px":"20px",direction:chosen_language==="English"?null :"rtl",
    },
  }

  

return (
    <div> {chosen_language==="English" ?  <EnglishLanguages/>  : <HebrewLanguages/>   }</div> 

)
}
export default Languages






