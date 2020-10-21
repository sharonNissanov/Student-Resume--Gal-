import React from 'react'
import './Semantic.css';
import { Header, Transition , Image,Grid} from 'semantic-ui-react'
import gal from '../pictures_files/gal.jpeg'
import {isMobileOnly, isBrowser} from "react-device-detect";

function FirstPage() {
  const [open, setOpen] = React.useState(false)
  const [visible , setVisible] = React.useState(false)

  
  React.useEffect(() => {

    setVisible(!visible) 
  }, [setVisible]);

  return (
    <div className="FirstPage">
 
    <Transition visible={visible} animation='scale' duration={800} >  
      <Grid container  columns={2} centered doubling  stackable 
      textAlign="center" verticalAlign="middle">
      <Grid.Column>
        
        <Header  as='h1' style={{color:"white", fontFamily:"Georgia",textAlign:"center"}} size='huge'> 
        {isBrowser ?  <div style={{color:"white", fontFamily:"Georgia",textAlign:"center", fontSize:"50px"}}
        >Gal Wainberg</div>: "Gal Wainberg" }
        <br></br>
        </Header>
        
        <Header style={{color:"white", fontFamily:"Georgia",textAlign:"center"}} size='large'> 
        Fourth year student of <br></br>
        Electrical & Electronic 
        Engineering 
       </Header>
{/* 
       <Header style={{color:"white", fontFamily:"Georgia",textAlign:"center"}} size='medium'> 
       Specialization in Digital Signal Processing
       </Header> */}


      </Grid.Column>
      <Grid.Column >

      <Image src={gal} size="medium" centered bordered avatar style={{opacity:"0.44"}}/>
   
    </Grid.Column>
    </Grid>
    </Transition>
    
     </div>
  )
}





export default FirstPage;