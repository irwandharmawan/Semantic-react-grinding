import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container,Divider,List, Loader, Dimmer, Placeholder, Segment, Icon, Search, Grid, Header, Button} from 'semantic-ui-react';

class Sample2 extends React.Component{
    constructor(){
      super();
      this.state=[{
        source:'http://www.google.com',
        name:'Google'
      },
      {
        source:'http://www.facebook.com',
        name:'Facebook'
      },
      {
        source:'http://www.semantic-ui.com',
        name:'Semantic UI'
      },
      {
        source:'http://www.niomic.com',
        name:'Niomic'
      },
      {
        source:'http://www.reactjs.org',
        name:'React JS'
      }]
    }


    render(){
    return(
      <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
          {/*Search Column*/}
          <Grid.Column verticalAlign='middle'>
            <Header icon>
              <Icon name='search' />
              Find Document
            </Header>
            <Search placeholder='Search Document' />
          </Grid.Column>

          {/*Create New Document to be searchable*/}
          <Grid.Column verticalAlign='middle'>
            <Header icon>
              <Icon name='document' />
              Add new Document
            </Header>
            <Button color='blue' content='Create Document' />
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment style={{height:'90px'}}>
        <Dimmer active>
          <Loader content='loading'/>
        </Dimmer>
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column width={5}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line length='long' />
                <Placeholder.Line length='Medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={7}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line length='very long' />
                <Placeholder.Line length='Medium' />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
          <List>
          <h4> Websites </h4>
          {this.state.map((item,index)=>{
            return(
              <List.Item
                icon='linkify'
                content={<a href={item.source}>{item.name}</a>}
              />
            )
          })}
          </List>
        </Grid.Column>
      </Grid>
      </div>
    )}
}

export default Sample2;
