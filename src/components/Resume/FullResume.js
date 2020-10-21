import React from 'react'
import '../Semantic/Semantic.css';
import Skills from './Skills'
import WorkEx from './WorkEx'
import Languages from './Languages'
import MilitaryService from './MilitaryService'
import Education from './Education'


import { Container,Segment,Grid} from 'semantic-ui-react'

const FullResume = () => (
    <div className="FullResume" > 
    <Container text>
      <Segment.Group>
   
    
    
    
     
      </Segment.Group>
    </Container>
  
   

    <Grid columns={2} container divided='vertically' stackable>
      <Grid.Row>
        <Grid.Column>
          <WorkEx/>
        </Grid.Column>
        <Grid.Column>
          <Skills/>
      
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Education/>
        </Grid.Column>
        <Grid.Column>
        <MilitaryService/>
        <Languages/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {/* <Languages/> */}
        </Grid.Column>
        <Grid.Column>
         
        </Grid.Column>
      </Grid.Row>
    </Grid>



  
     </div> 
)

export default FullResume