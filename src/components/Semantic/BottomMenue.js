import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './Semantic.css'



export default class BottomMenue extends Component {
  state = { activeItem: 'linkedin' }

  render() {
    const { activeItem } = this.state

    return (
<div style={{color:"blue"}}>  

      <Menu icon className='BottomMenue' fixed="bottom"  widths={3} floated   >
    
        <Menu.Item 
          name='linkedin'
      
          onClick={() => {window.open('https://www.linkedin.com/in/%E2%9A%A1gal-wainberg%E2%9A%A1-084259bb/')}}
        >
          <Icon name='linkedin square' size='big'/>
        </Menu.Item>
        {/* <br></br>Copyright Sharon Nissanov 2020 */}
        <Menu.Item
          name='mail'
      
          onClick={()=>{window.open("mailto:Gal.wainberg07@gmail.com?subject=Resume Gal Wainberg&body=Hi Gal, I would like to contact you regarding your resume.")}}
        >
          <Icon color='black' name='mail'  size='big'  />
          
        </Menu.Item>

        <Menu.Item
          name='call'
         
          onClick={()=>{window.open("tel:+972528088727")}}
        >
          <Icon color='black' name='call square' size='big'  />
        </Menu.Item>

{/* 
        <Menu.Item
          name='copyright'
      
      
        >
          <Icon color='black' name='copyright' size='big'  />
        </Menu.Item>

      */}


      </Menu>
   
      </div>
    )
  }
}