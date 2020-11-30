import 'semantic-ui-css/semantic.min.css';
import {Comment, Button, Form, Header} from 'semantic-ui-react';


export default function Comments(){
  return(
    <Comment.Group>
      <Header as='h3' dividing>Comments</Header>
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>

          <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>

          <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>

        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>

              <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
      
    </Comment.Group>


  )
}
