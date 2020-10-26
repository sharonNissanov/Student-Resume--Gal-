import React from 'react'
import { Header,Placeholder,Segment} from 'semantic-ui-react'
import '../Semantic/Semantic.css';
import {isMobile} from "react-device-detect";

function Education() {

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


  const EnglishEducation=()=>(
    <div className="Education">
     <h2 style={styles.workExBr}> Education </h2>
     <h2 style={styles.jobNameBr} > Electrical & Electronics engineering /</h2>
     <h2 style={styles.yearsBr} >Azrieli College of engineering <br></br> 2017 - present</h2> 
     <h3 style={styles.infoBr} > 
      B.Sc. Electrical & Electronics engineering student on fourth year.
      <br></br>
      Specialization in DSP (Digital Signal Processing). 
      <br></br>
    </h3>
    <br></br>
    {/* --------------------------------------------------- */}
  
     <h2 style={styles.jobNameBr}> Electronics studies/ </h2>
     <h2 style={styles.yearsBr}>ORT Aviation and Aerospace College<br></br> 2008 - 2011</h2>
     
     <h3 style={styles.infoBr}> 
      Graduated of Air Force Academy
      <br></br>
      <li> Full matriculation majoring in Electronics.</li>
      <li> Technology certificate with specialization in Electronics and Computer science.</li>
  
    </h3>
    <br></br>
  </div>
  )
  /*---------------------------------------------------------------------------------------------- */
  

  const HebrewEducation=()=>(
    <div style={{direction:"rtl",  textAlign:"right"}}>
     <h2 style={styles.workExBr}> השכלה </h2>
     <h2 style={styles.jobNameBr} > הנדסת חשמל ואלקטרוניקה  / </h2>
     <h2 style={styles.yearsBr} >עזריאלי – מכללה להנדסה ירושלים <br></br> 2017 - כיום</h2> 
     <h3 style={styles.infoBr} > 
     סטודנט שנה רביעית להנדסת חשמל ואלקטרוניקה בהתמחות
     <br></br>
(Processing Signal Digital (DSP - עיבוד אות ותמונה, שנה רביעית. ממוצע 85.
      <br></br>
    </h3>
    <br></br>
    {/* --------------------------------------------------- */}
  
     <h2 style={styles.jobNameBr}> מסלול שוחרות חיל האוויר / </h2>
     <h2 style={styles.yearsBr}>אורט תעופה וחלל מעלה אדומים,<br></br>2011-2008</h2>
     
     <h3 style={styles.infoBr}>
     <li> בוגר מסלול שוחרות של חיל האוויר. </li>
     <li>תעודת בגרות מלאה </li>
      <li> תעודה טכנולוגית – הרחבת 15 יח' לימוד בתחום האלקטרוניקה והמחשבים  </li>
      <li> פרויקט גמר: מעגל המשלב חומרה ותוכנה של מחיאת כף להדלקת נורה.  </li>
    </h3>
    <br></br>  
  </div>
  )
  const styles = {
  
    workExBr:{
      color:"white",textAlign: chosen_language==="English"?"left":"right", wordSpacing:"10px", lineHeight: "1.0", fontSize:isMobile?"22px":"29px",direction:chosen_language==="English"?null :"rtl",
    },
    jobNameBr:{
      color:"#0099cc", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.2", display:"inline", fontSize:isMobile?"17px":"22px",direction:chosen_language==="English"?null :"rtl",
    },
    yearsBr:{
      color:"white", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.2", display:"inline"  , fontSize:isMobile?"17px":"24px",direction:chosen_language==="English"?null :"rtl",
    },
    infoBr:{
      color:"white", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.3" ,direction:chosen_language==="English"?null :"rtl",fontSize:isMobile?"15px":"20px"
    }
  
  }


  return(
    <div> {chosen_language==="English" ?  <EnglishEducation/>  : <HebrewEducation/>   }</div> 
)
  }



export default Education







