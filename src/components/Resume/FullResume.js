import React from 'react'
import '../Semantic/Semantic.css';
import Skills from './Skills'
import WorkEx from './WorkEx'
import Languages from './Languages'
import MilitaryService from './MilitaryService'
import Education from './Education'
import {isBrowser} from "react-device-detect";

import { Container,Segment,Grid, Header , } from 'semantic-ui-react'


function FullResume() {

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


  return(
    <div className={chosen_language==="English"?
    
    isBrowser?"FullResumeEnglishBrowser":"FullResumeEnglishMobile":
    isBrowser?
    "FullResumeHebrewBrowser" : "FullResumeHebrewMobile"} > 



        <WorkEx/>
        <Education/>
        <MilitaryService/>
        <Skills/>
        <Languages/>
        <div className="Space"></div>

    
{/* 
    <Grid columns={2} container divided='vertically' stackable >
   
        <Grid.Column>
          <WorkEx/>
          <Education/>
      
        </Grid.Column>

        <Grid.Column>
          <Skills/>
          <Languages/>
          <MilitaryService/> <br></br>  <br></br>
        </Grid.Column>
   

    </Grid> */}



  
     </div> 
)
}
export default FullResume