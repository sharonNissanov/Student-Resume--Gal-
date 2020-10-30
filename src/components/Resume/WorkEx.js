import React from 'react'
import {isMobile} from "react-device-detect";

function WorkEx() {

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

  
  const EnglishWorkEx=()=>(
    <div className="WorkEx">
      <br></br>
     <h2 style={styles.workExBr}> Work​ Experience </h2>
     <h2 style={styles.jobNameBr} >Network Operation Center / </h2>
     <h2 style={styles.yearsBr} >TATA – TCS <br></br> 2019 - present </h2> 
     <h3 style={styles.infoBr} > 
     NOC operator in charge of monitoring, controlling and
      <br></br> 
      operating computer system, data analysis and troubleshooting. 
      <br></br>
      Access to core systems and communication such as Virtual machines and SFTP. 
      <br></br>
      Certified as operator of Control M and Centerity automation programs– 
      <br></br>
      systems support for application and technical teams.
      <br></br>
    </h3>
    <br></br>
    {/* --------------------------------------------------- */}
     <h2 style={styles.jobNameBr}>Integrator & Customer support/  </h2>
     <h2 style={styles.yearsBr}>ELTA – IAI<br></br> 2015 - 2017 </h2>
     
     <h3 style={styles.infoBr}> 
      Experienced System Integration Specialist with demonstrated experience in aviation 
      <br></br>
      and aerospace industry. 
      <br></br>
      Especially of the field of radar system, RF, Fiber optics, System Engineering and Embedded System.
      <br></br>
      Experienced with relevant testis equipment as part of my ongoing role as part of integration team. 
      <br></br>
      In addition, ongoing support for IDF for full troubleshooting support.
    </h3>
    <br></br>
  </div>
  )

/*------------------------------------------------------------------------------------------------ */
  const HebrewWorkEx=()=>(
    <div style={{direction:"rtl",  textAlign:"right"}}>
      <br></br>
     <h2 style={styles.workExBr}> ניסיון תעסוקתי </h2>
     <h2 style={styles.jobNameBr} > <div style={styles.yearsBr} >TATA – TCS  </div>/ Network Operation Center  </h2>
     <h2 style={styles.yearsBr} > <br></br> 2019 - כיום </h2> 
     <p style={styles.infoBr}>
     מפעיל NOC אחראי על ניטור, בקרה והפעלה של מערכות מחשב, ניתוח נתונים ופתרון בעיות.
      <br></br>
      גישה למערכות ליבה ותקשורת כמו
      Virtual machine, SFTP
     
      <br></br>  
      מוסמך כמפעיל תוכנית אוטומציה של  Control M -<br></br>
  תמיכה במערכת לצוותי יישומים וטכניים תוך כדי שיתוף פעולה מלא עם אנשי IT מישראל והודו.
     
      <br></br>

    </p>

     <h2 style={styles.jobNameBr}>אינטגרטור ותמיכה בלקוח /  </h2>
     <h2 style={styles.yearsBr}>תעשייה אווירית - אלתא </h2>
     <br></br>
     <h2 style={styles.yearsBr}>2015 - 2017 </h2>
     <p style={styles.infoBr}> 

        במסגרת תפקידי עבדתי כחלק מצוות אינטגרציה ב2 פרויקטים . <br></br> לקחתי חלק פעיל בהקמת
  פרויקט מתחילתו ועד מסירתו ללקוח. <br></br>במקביל נתתי תמיכה טכנית ללקוח (צה"ל) תוך מענה
  טלפוני ועד הגעה לשטח.
  <br></br>
  כחלק מעבודתי התעסקתי בתחומי RF ,סיבים אופטיים, תקשורת מחשבים IT תוך שימוש
  <br></br>בצבדי"ם רלוונטיים כמו Analyzer Spectrum, Scope וציוד בדיקה אופטי) ניחות וניקוין קו אופטי) 
    </p>
    <br></br>
  </div>

  )



  const styles = {

    workExBr:{
      color:"white" , textAlign: chosen_language==="English"?"left":"right", wordSpacing:"10px", lineHeight: "1.0", fontSize:isMobile?"22px":"29px",
    },
    jobNameBr:{
      color:"#0099cc", lineHeight: "1.2", display:"inline" , fontSize:isMobile?"17px":"22px",
    },
    yearsBr:{
      color:"white",lineHeight: "1.2", display:"inline" , fontSize:isMobile?"17px":"24px",
    },
    infoBr:{
      color:"white", textAlign: chosen_language==="English"?"left":"right", lineHeight: "1.3" , fontSize:isMobile?"15px":"20px",  
    },

  }

return (
  <div> 
  {chosen_language==="English" ?  <EnglishWorkEx/>  : <HebrewWorkEx/>   }

  </div> 
)

}



export default WorkEx






