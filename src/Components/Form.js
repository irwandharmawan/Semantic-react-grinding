import 'semantic-ui-css/semantic.min.css';
import {Form, Checkbox, Button, Header,Segment, Grid, Input,Message} from 'semantic-ui-react';

export default function StartUpForm(){
  return(
    <div>
      <Grid textAlign='center' style={{height:'600px'}}>
        <Grid.Column style={{width:'450px'}} verticalAlign='middle'>
        <Header image='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' content='Member Login'/>
        <Segment>
          <Form>
            <Form.Field>
              <Input placeholder='Username' icon='user'iconPosition='left' type='text'/>
            </Form.Field>
            <Form.Field>
              <Input placeholder='Password' icon='lock' iconPosition='left' type='password'/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Condition' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>

        <Message>
          <p> Tidak Punya Akun ? Silahkan <a href='#'>Register</a></p>
        </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}
