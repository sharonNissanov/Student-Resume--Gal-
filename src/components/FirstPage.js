import React from 'react'
import { Header, Transition, Image,Grid} from 'semantic-ui-react'
import gal from './pictures_files/gal.jpeg'
import {isBrowser} from "react-device-detect";

function FirstPage() {
  const [open, setOpen] = React.useState(false)
  const [visible , setVisible] = React.useState(false)
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

    setVisible(!visible) 
  }, [setVisible]);

  const styles = {
    browserTitle: {
      color:"white", fontFamily:chosen_language==="English"?"Georgia":"Lucida Sans Unicode",textAlign:"center", fontSize:"50px"
    },
    browserInfo:{
      color:"white", fontFamily:chosen_language==="English"?"Georgia":"Lucida Sans Unicode",textAlign:"center", fontSize:chosen_language==="English"?"26px":"30px"
    },
    mobileInfo:{
      color:"white", fontFamily:chosen_language==="English"?"Georgia":"Lucida Sans Unicode",textAlign:"center", fontSize:"18px"
    },
    basic:{
      color:"white", fontFamily:chosen_language==="English"?"Georgia":"Lucida Sans Unicode",textAlign:"center"
    },
  }


  return (
    // className= {isBrowser?  "FirstPageBr" : "FirstPageMb"}
    <div  className= "FirstPage">
      {chosen_language==="English"?
      
      <Transition visible={visible} animation='scale' duration={800} >  
      <Grid container  columns={2} centered doubling  stackable 
      textAlign="center" verticalAlign="middle">
      <Grid.Column >
        
        <Header style={styles.basic} size='huge'> 
        {isBrowser ?  <div style={styles.browserTitle}>Gal Wainberg</div>: "Gal Wainberg" }
   
        </Header>
        
        <Header style={isBrowser? styles.browserInfo: styles.mobileInfo}
        
        >
        Fourth year student of <br></br>
        Electrical & Electronics 
        Engineering 
       </Header>

       {isBrowser ? 
       <Header style={styles.basic} size='medium'> 
       Specialization in Digital Signal Processing
       </Header>
       : <Header style={styles.basic} size='small'> 
       Specialization in Digital Signal Processing
       </Header> }


      </Grid.Column>
      <Grid.Column >

      <Image src={gal} size={isBrowser? "medium" : "small"} centered  avatar className="galsImg"/>
   
      </Grid.Column>
      </Grid>

      </Transition>

      // Hebrew
      : <Transition visible={visible} animation='scale' duration={800} >  
      <Grid container  columns={2} centered doubling  stackable 
      textAlign="center" verticalAlign="middle">


      <Grid.Column >
        <Header  as='h1' style={styles.basic} size='huge'> 
        {isBrowser ?  <div style={styles.browserTitle}>גל וינברג</div>: " גל וינברג" }
      
        </Header>
        
        <Header style={isBrowser? styles.browserInfo: styles.mobileInfo}
        
        >
        סטודנט שנה רביעית <br></br>להנדסת חשמל ואלקטרוניקה 
      </Header>

      {isBrowser ? 
      <Header style={styles.basic} size='medium'> 
        בהתמחות עיבוד אות ותמונה
      </Header>
      : <Header style={styles.basic} size='small'> 
      בהתמחות עיבוד אות ותמונה
      </Header> }
      </Grid.Column>
      <Grid.Column ><Image src={gal} size={isBrowser?  "medium" : "small"} centered  avatar  className="galsImg" /></Grid.Column>

      </Grid>

      </Transition>
    
    }
     </div>
  )
}





export default FirstPage;