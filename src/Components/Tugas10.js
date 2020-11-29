import 'semantic-ui-css/semantic.min.css';
import {Container,Header, Grid, Icon, Flag, Button, Image, Input, Divider,Segment, Label } from 'semantic-ui-react'
import React, {Component} from 'react';

class Sample extends Component{
  constructor(props){
    super(props);
    this.state={
      value:0
    }
  }

  render(){
    return(
      <div>
      <Container style={{marginTop:'10px'}}>
        <Grid columns={3}>
          <Grid.Column verticalAlign='middle' width={3}>
            <Flag name='id' />
            <Icon name='angle left' />
            <Icon name='angle right' />
          </Grid.Column>
          <Grid.Column width={9}>
            <Input fluid placeholder='search' icon='star' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Header fluid as='h3'>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' /> Irwan Dharmawan
            </Header>
          </Grid.Column>
        </Grid>
      </Container>

      <Divider horizontal> Selamat Datang </Divider>

      <Container textAlign='right'>
          <Label as='a' color='green' tag>Sport</Label>
      </Container>

      <Container textAlign='center' style={{marginTop:'20px'}}>
      <p>sasdsadasdhasdhsuadhsaudhasudhusahdusahdusaudhsauhd \
      asdsadsadsadhsadusahudfkdhfjksahusuahfsahusahufas \
      alskdjsadsadashdashdsa
      asdsadisadisahdas
      sasdsadasdhasdhsuadhsaudhasudhusahdusahdusaudhsauhdsadhasudhausdh
      asdihsadu</p>

      <Button color='green' style={{marginTop:'20px',marginBottom:'20px'}}icon='plus' content='Tambah Tautan Ke List' />
      </Container>


      </div>
    )
  }
}

export default Sample;
