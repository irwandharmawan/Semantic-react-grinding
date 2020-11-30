import 'semantic-ui-css/semantic.min.css';
import {Table, Search, Container, Label,Menu, Icon} from 'semantic-ui-react';
import React from 'react';

class UserData extends React.Component{
  constructor(){
    super();
    this.state=[{
      Name:'Panduan Belajar Javascript',
      Type:'PDF'
    },{
      Name:'Panduan Belajar CSS',
      Type:'PDF'
    },{
      Name:'Panduan Belajar React JS',
      Type:'PDF'
    }]
  }

  render(){
    return(
      <div>
        <Container>
          <Table celled>
            <Table.Header>
              <Table.HeaderCell colSpan='2' textAlign='right'><Search>Search Document</Search></Table.HeaderCell>
              <Table.Row>
                <Table.HeaderCell textAlign='center'> Document Name </Table.HeaderCell>
                <Table.HeaderCell textAlign='center'> File Type </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell><Label ribbon>{this.state[0].Name}</Label></Table.Cell>
                <Table.Cell textAlign='center'>{this.state[0].Type}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{this.state[1].Name}</Table.Cell>
                <Table.Cell textAlign='center'>{this.state[1].Type}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{this.state[2].Name}</Table.Cell>
                <Table.Cell textAlign='center'>{this.state[2].Type}</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon='chevron left'>

                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    )
  }
}

export default UserData;
