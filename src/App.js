import StartUpForm from './Components/Form';
import UserData from './Components/UserData';
import Feeds from './Components/Feeds.js';
import Comments from './Components/Comments.js'
import {Grid,Container} from 'semantic-ui-react'

export default function App() {
  return (
    <div>
        <StartUpForm />
      <Container>
        <UserData />
        <Grid columns='2' style={{marginTop:'30px'}}>

            <Grid.Row>
              <Grid.Column>
              <Comments />
              </Grid.Column>

              <Grid.Column>
              <Feeds />
              </Grid.Column>

            </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
