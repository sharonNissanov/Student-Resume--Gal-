import React from 'react'
import {isMobile} from "react-device-detect";

function MilitaryService() {

  const [chosen_language , setChosen_language] = React.useState(null)
  const [visible , setVisible] = React.useState(false)

  React.useEffect(() => {

    try{ 
      const chosen_lan = localStorage.getItem("Language");
      if(chosen_lan!==null){ 
        setChosen_language(chosen_lan)
   
      }
    }catch(e){
        console.log(e)
    } 
    setVisible(!visible) 
  }, [setVisible]);

  
const EnglisMilitaryService=()=>(
  <div className="MilitaryService">
    <br></br>
   <h2 style={styles.workExBr}>Military service  </h2>
   <h2 style={styles.jobNameBr} >Mandatory and Career service</h2>
   <h2 style={styles.yearsBr} > <br></br>2011 - 2015</h2> 
   <h3 style={styles.infoBr} > 
   Service as an "Iron Dome" level A & B radar technician and team leader. 
    <br></br>
    Graduated rank as Sergeant Major.
    <br></br> <br></br> 
  </h3>
</div>
)

const styles = {

  workExBr:{
    color:"white",textAlign: chosen_language==="English"?"left":"right", wordSpacing:"10px", lineHeight: "1.0",fontSize:isMobile?"22px":"29px",direction:chosen_language==="English"?null :"rtl",
  },
  jobNameBr:{
    color:"#0099cc", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.2", display:"inline", fontSize:isMobile?"17px":"22px",direction:chosen_language==="English"?null :"rtl",
  },
  yearsBr:{
    color:"white", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.2", display:"inline", fontSize:isMobile?"17px":"24px",direction:chosen_language==="English"?null :"rtl",
  },
  infoBr:{
    color:"white", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.3" , fontSize:isMobile?"15px":"20px", direction:chosen_language==="English"?null :"rtl",
  },
}



const HebrewMilitaryService=()=>(
  <div style={{direction:"rtl",  textAlign:"right"}}>
    <br></br>
   <h2 style={styles.workExBr}> שירות צבאי </h2>
   <h2 style={styles.jobNameBr} >שירות חובה וקבע / טכנאי מכ"ם כיפת ברזל דרג א' וב'</h2>
   <h2 style={styles.yearsBr} > <br></br>2011 - 2015</h2> 
   <h3 style={styles.infoBr} > 
   שירות צבאי כטכנאי מכ"ם כיפת ברזל בדרגים א' וב' בתפקידי טכנאי, ראש צוות ומ"ע מכ"ם.
    <br></br>  <br></br> 
  </h3>
</div>
)


return(
  <div> {chosen_language==="English" ?  <EnglisMilitaryService/>  : <HebrewMilitaryService/>   }</div> 

)
}
export default MilitaryService

