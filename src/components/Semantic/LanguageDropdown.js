import React,{createRef} from 'react'
import './Semantic.css';
import {  Button, Header, Icon, Modal, Transition, Checkbox, Segment } from 'semantic-ui-react'
import { isBrowser} from "react-device-detect";
function LanguageDropdown() {
  const [open, setOpen] = React.useState(false)
  const [visible , setVisible] = React.useState(false)
  const [ifChecked , setIfChecked] = React.useState(true)
  const [chosen_language , setChosen_language] = React.useState(null)
  
  
  React.useEffect(() => {
    try{ 
      const check_lan = localStorage.getItem("Language");
      if(check_lan!==null){
        setChosen_language(check_lan)
        if(check_lan==="Hebrew")
          setIfChecked(false) 
      }
    }catch(e){
         console.log(e)
    }
    setVisible(!visible) 
  }, [setVisible]);


  return (
    <div className ="LanguageDropdown">

   
    <Segment compact size={isBrowser ? "medium" : "mini" } >
    <Checkbox size="medium" checked={ifChecked} slider  
      label={chosen_language==="English" ? "עברית " : "English"} 
      
    
      onChange={()=>{
        try{ 
          const check_lan = localStorage.getItem("Language");
          if(check_lan==="English")
          { 
            localStorage.removeItem("Language") 
            localStorage.setItem("Language", "Hebrew");
          }
          if(check_lan==="Hebrew")
          {
            localStorage.removeItem("Language") 
            localStorage.setItem("Language", "English");
          }
         window.location.reload()
        }  

           catch(e){
             console.log(e)
           }  // window.location.reload()
         }
       
        
      }
  
      />
    </Segment >

    </div>

  )
}

const Text=()=>(
  <div
   style={{ textAlign:"center", alignItems:"center",position:"initial"}}
      >
   {/* <h2>Choose the wanted language</h2> */}
      <Button> Hebrew</Button>
      <Icon name='exchange ' size="big" />  
      <Button> English</Button>
      <Segment compact position="center" size="small">
      <Checkbox size="huge"  defaultChecked  label="English" toggle></Checkbox>
      </Segment >
</div>
)

export default LanguageDropdown