import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Semantic.css'
import FirstPage from './FirstPage';
import About  from '../Resume/About';
import BottomBar from './BottomBar';
import FullResume from '../Resume/FullResume';
import App from '../App';
import ScrollDowmBtn from './ScrollDowmBtn'
import LanguageDropdown from './LanguageDropdown'
import {Button,Icon} from 'semantic-ui-react'
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
import EnGalWainbergCV from '../pictures_files/EnGalWainbergCV.pdf'
import HeGalWainbergCV from '../pictures_files/HeGalWainbergCV.pdf'
import BottomMenue from './BottomMenue'

export default class HamburgerMenue extends React.Component {
    state={ location:"Home", chosen_language:null}
    
    componentDidMount()
    {
      try{ 
        const check_lan = localStorage.getItem("Language");
         if(check_lan===null)
         {   
           localStorage.setItem("Language", "English");
         }
         if(check_lan!==null)
         {   
          this.setState({chosen_language:check_lan,})
         }

       }catch(e){
           console.log(e)
         } 
    }
   change_location(new_location){
    //e.preventDefault();
      this.setState({location: new_location})
      // window.location.reload()

    }
    change_lan(){
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
     
      
    

 
    render () {
        const { location, chosen_language} = this.state
      return (
        <div>  
      

      <App/>  

        <Menu right styles={styles}   isOpen={ false }
        width={120}
        height={50}
        strokeWidth={623}
        rotate={0.5}

    
        >
          <br></br>


   {chosen_language==="English"? <a className="menu-item1" href="/"><Icon name="home"/> Home</a> : 
   <a className="menu-item1" href="/">בית <Icon name="home"/></a> }


  {chosen_language==="English"? <a className="menu-item2"   href="/About"><Icon name="info"/> About</a> : 
   <a className="menu-item2" href="/About" > על עצמי  <Icon name="info"/></a> }


  {chosen_language==="English"? <a className="menu-item3"   href="/Resume"><Icon name="file"/> Resume</a> : 
   <a className="menu-item3" href="/Resume" > קורות חיים  <Icon name="file"/></a> }


{chosen_language==="English"? <a className="menu-item4"  href={EnGalWainbergCV}  download ><Icon name="download"/> Download My CV</a> : 
   <a className="menu-item4"  href={HeGalWainbergCV}  download > הורדת קורות החיים  <Icon name="download"/></a> }


{chosen_language==="English"? <a className="menu-item5"  onClick={()=>{this.change_lan()}} href={"/"} ><Icon name="hello"/>עברית</a> : 
   <a className="menu-item5" onClick={()=>{this.change_lan()}}  href={"/"}   > English<Icon name="hello"/></a> }



{chosen_language==="English"? <a className="menu-item6" onClick={()=>{window.open("https://sharon-nissanov.com/") } }  ><Icon name="copyright"/> Sharon Nissanov 2020</a> : 
   <a className="menu-item6" onClick={()=>{window.open("https://sharon-nissanov.com/") } } > שרון ניסנוב 2020 <Icon name="copyright"/></a> }



        </Menu>
       
        <App/>  
        {/* <ScrollDowmBtn/> */}
        <Router>  
        <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/Resume" component={FullResume} />
        <Route path="/About" component={About} />

      </Switch>
      </Router>


       




     
         {/* <BottomMenue/> */}
        {/* <LanguageDropdown/> */}
        </div>
      );
    }
  }

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '38px',
      height: '34px',
      right: '20px',
      top: '10px',
  
    },
    bmBurgerBars: {
       background: 'white',
     // color:'white',
     opacity:"0.7",

    },
    bmBurgerBarsHover: {
      //  backgrounColor: 'blue',
      //  color:"blue",
      background: 'black',
    },
    bmCrossButton: {
      // height: '34px',
      // width: '40px'
    },
    bmCross: {
      // background: '#bdc3c7'
      background: 'white',
      height: '20px',
      width: '7px'
    },
    // bmCrossHover: {
    //    background: '#bdc3c7',
    //  // background: 'white',
    //   height: '20px',
    //   width: '7px'
    // },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width:"160px",
      
    },
    bmMenu: {
     opacity:"0.8",
     //background: "rgb(215, 223, 205)",
      //  background: 'grey',
       background: '#373a47',
      padding: '0.7em 0.4em ',
      fontSize: '1.15em',

    },
    // bmMorphShape: {
    //   fill: 'grey'
    // },
    bmItemList: {
      // color: '#b8b7ad',
      padding: '0.2em',
      textAlign:"center",
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }