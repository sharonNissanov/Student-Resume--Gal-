import React from 'react'
import { Grid, Image, Icon, Sticky , Header, Segment} from 'semantic-ui-react'
import './Semantic.css'
const BottomBar = () => (

  <div className='BottomBar'>
      <Segment stacked style={{backgroundColor:"rgb(215, 223, 205)"}} textAlign="center" >
    <Grid columns={3} >
    <Grid.Row>
      <Grid.Column  >
      <Icon.Group size='big' container="true" >
        {/* <Icon loading size='big' name='circle notch' /> */}
        <Icon name='linkedin square' color='black'
        onClick={() => {window.open('https://www.linkedin.com/in/gal-wainberg-084259bb/')}} />
      
        </Icon.Group>
      </Grid.Column>
      <Grid.Column>
      <Icon.Group size='big'>
        {/* <Icon loading size='big' color='black' name='circle notch' /> */}
        <Icon color='black' name='mail'  />
        </Icon.Group>
     
      </Grid.Column>
      <Grid.Column>
 

        <a href="tel:+972528088727" >
        <Icon.Group size='big'>
        {/* <Icon loading size='big' color='black' name='circle notch' /> */}
        <Icon color='black' name='call square'  />
        </Icon.Group>
        </a> 
      </Grid.Column>

     
    </Grid.Row>
 {/* Copyright © 2020 Sharon Nissanov */}
  

  </Grid> 
  </Segment>
  </div>





)

export default BottomBar