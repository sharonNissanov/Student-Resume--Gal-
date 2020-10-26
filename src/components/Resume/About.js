import React from 'react'
import { Header,Placeholder,Segment,Transition} from 'semantic-ui-react'
import '../Semantic/Semantic.css';
import {isBrowser, isMobile} from "react-device-detect";


function About() {

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

  
  const styles = {

    headlineBr:{
      color:"white", fontFamily:chosen_language==="English"?"Trebuchet MS":"Lucida Sans Unicode",textAlign:"center", wordSpacing:"10px", lineHeight: "1.6", fontSize:"25px", direction:chosen_language==="English"?null :"rtl"
    },
    headlineMb:{
      color:"white", fontFamily:chosen_language==="English"?"Trebuchet MS":"Lucida Sans Unicode",textAlign:"center", wordSpacing:"10px", lineHeight: "1.6", fontSize:"20px",direction:chosen_language==="English"?null :"rtl",
    },
    infoBr:{
      color:"white",fontFamily:chosen_language==="English"?"Trebuchet MS":"Lucida Sans Unicode",textAlign:"center", lineHeight: "1.6",direction:chosen_language==="English"?null :"rtl",
    },
    infoMb:{
      color:"white", fontFamily:chosen_language==="English"?"Trebuchet MS":"Lucida Sans Unicode",textAlign:"center",  fontSize:"15px",lineHeight: "1.8",direction:chosen_language==="English"?null :"rtl",
    }
  }

  
  
const AboutEnglishText=()=>(
  <div >
   
   <h1 style={isBrowser? styles.headlineBr : styles.headlineMb} > Hello,<br></br> a bit about me: </h1> 
   <h3 style={isBrowser? styles.infoBr : styles.infoMb}> 
    I'm an Electrical & Electronics Engineering student at Azrieli College of Engineering Jerusalem, <br></br>
    specialization in DSP (Digital Signal Processing).<br></br>
    Experienced System Integration Specialist with a
    demonstrated history <br></br> of working in the aviation and aerospace industry. <br></br>
    In addittion I have experience as NOC operator with accsses to SFTP, Conrol-M and Centerity. <br></br>
    Skilled in Radio Frequency (RF), IT, Fiber Optics, Troubleshooting, Technical support  <br></br> and worked well as
     part of team.
  </h3>
</div>
)

const AboutHebrewText=()=>(
  isMobile ?
  <div>
  <h1 style={isBrowser? styles.headlineBr : styles.headlineMb} > היי,<br></br> מעט על עצמי: </h1> 
  <h3 style={isBrowser? styles.infoBr : styles.infoMb}>
   
        סטודנט שנה רביעית להנדסת חשמל ואלקטרוניקה במכללה להנדסה בירושלים, 
    <br></br>
    בהתמחות עיבוד אות ותמונה.<br></br>
    מומחה לאינטגרציית מערכות משולבות ובעל ניסיון בעבודה בתעשיה האווירית תוך<br></br>
    עבודה עם RF, IT, סיבים אופטיים, פתרון בעיות בזמן אמת ותמיכה טכנית מלאה
   
    ללקוח. בנוסף, במהלך הניסיון התעסוקי רכשתי ידע רב כמפעיל NOC עם הרשאות לממשקים כמו Control-M, Centerity, SFTP.
    <br></br>
בעל יכולת למידה עצמית ועבודה טובה כחלק מצוות. 
 </h3>
</div> 
  :

<div >
<h1 style={isBrowser? styles.headlineBr : styles.headlineMb} > היי,<br></br> מעט על עצמי: </h1> 
<h3 style={isBrowser? styles.infoBr : styles.infoMb}>
 
      סטודנט שנה רביעית להנדסת חשמל ואלקטרוניקה במכללה להנדסה בירושלים, 
  <br></br>
  בהתמחות עיבוד אות ותמונה.<br></br>
  מומחה לאינטגרציית מערכות משולבות ובעל ניסיון בעבודה בתעשיה האווירית תוך<br></br>
  עבודה עם RF, IT, סיבים אופטיים, פתרון בעיות בזמן אמת ותמיכה טכנית מלאה
 
  ללקוח.   <br></br>בנוסף, במהלך הניסיון התעסוקי רכשתי ידע רב כמפעיל NOC    <br></br>עם הרשאות לממשקים כמו Control-M, Centerity, SFTP.
  <br></br>
בעל יכולת למידה עצמית ועבודה טובה כחלק מצוות. 
</h3>
</div>

  
)


  return (
      <div className={isBrowser?"About" :"AboutMB" }>
        
         {chosen_language==="English"?
           <AboutEnglishText/> 
          :<AboutHebrewText/> }
        
         </div>  
  )
}

export default About




