import React from 'react'
import { Grid, Image, Icon, Sticky , Header, Segment} from 'semantic-ui-react'

import './Semantic.css'
const BottomBar = () => (
  // >rgb(215, 223, 205)
  <div className='BottomBar'>
      <Segment stacked style={{backgroundColor:"#373a47", alignItems:"center"}} textAlign="center"  >
    <Grid columns={3} >
    <Grid.Row>
      <Grid.Column  >
      <Icon.Group size='big' container="true" >
        <Icon name='linkedin square' color='black'
        onClick={() => {window.open('https://www.linkedin.com/in/%E2%9A%A1gal-wainberg%E2%9A%A1-084259bb/')}} />
      
        </Icon.Group>
      </Grid.Column>
      <Grid.Column>
      <Icon.Group size='big'>
        <a href="mailto:Gal.wainberg07@gmail.com?subject=Resume Gal Wainberg&body=Hi Gal, I would like to contact you regarding your resume." target="_blank"><Icon color='black' name='mail'  /></a>
        </Icon.Group>
      
      </Grid.Column>  
      <Grid.Column>
 

        <a href="tel:+972528088727" >
        <Icon.Group size='big'>
        <Icon color='black' name='call square'  />
        </Icon.Group>
        </a>
      </Grid.Column>

     
    </Grid.Row >

  
  </Grid> 

    {/* <Icon.Group size='small'className="Copyright" > Copyright © 2020 Sharon Nissanov</Icon.Group> */}
    
  </Segment>
  </div>





)

export default BottomBar