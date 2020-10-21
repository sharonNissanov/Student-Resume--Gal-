import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu'
import './Semantic.css'
import FirstPage from './FirstPage';
import About  from '../Resume/About';
import ParticlesBack from '../ParticlesBack';
import BottomBar from './BottomBar';
import FullResume from '../Resume/FullResume';
import App from '../App';
import ScrollDowmBtn from './ScrollDowmBtn'

export default class HamburgerMenue extends React.Component {
    state={ location:"Home"}
    
   change_location(new_location){

      this.setState({location: new_location})
    }
    showSettings (event) {
      event.preventDefault();
    }
  
 
    render () {
        const { location } = this.state
      return (
        <div>  
       
        <Menu right styles={styles}
        width={120}
        height={50}
        strokeWidth={623}
        rotate={0.5}
        color='white'
        borderRadius={0}
   > 
          <a onClick={()=>this.change_location("Home")} className="menu-item"  >Home</a>
          <a onClick={()=>this.change_location("About")} className="menu-item" >About</a>
          <a onClick={()=>this.change_location("Resume")}  className="menu-item">Resume</a>
          <a onClick={ this.showSettings } className="menu-item--small">Download</a>

        </Menu>
        <App/> 
        {/* <ScrollDowmBtn/> */}
        
        {location==='Home'? <FirstPage/> : null}
        {location==='Resume'?<FullResume/>: null}
        {location==='About'? <About/>: null}
       
     
        <BottomBar/>

        </div>
      );
    }
  }

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '40px',
      top: '36px',
    
    },
    bmBurgerBars: {
      background: 'white',

    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
     opacity:"0.9",
      background: 'black',
    //  background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',

    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',

    //   textAlign: "center",
    //   alignItems: "center",
    },
    bmItem: {
      display: 'inline-block',

    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }