import React, {Component} from 'react';
import {Container, Segment, Button, Image, Header} from 'semantic-ui-react';
import NavTopbar from './NavTopbar';
import NavSidebar from './NavSidebar';

export default class Layout extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div id="mainContainer">
        <NavTopbar ref="topnav"/>
        <NavSidebar ref="sidenav"/>

        <Container>
          <Segment inverted clearing>
            <Header as='h3'>Application Content</Header>
            <Image src='http://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
            <Button inverted color='green' floated="right" onClick={() => this.refs.sidenav.toggleVisibility()}>Toggle Visibility</Button>
          </Segment>
        </Container>

        <Container>
          <Segment inverted clearing>
            <Header as='h3'>Application Content</Header>
            <Image src='http://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
            <Button inverted color='green' floated="right" onClick={() => this.refs.sidenav.toggleVisibility()}>Toggle Visibility</Button>
          </Segment>
        </Container>

        <Container>
          <Segment inverted clearing>
            <Header as='h3'>Application Content</Header>
            <Image src='http://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
            <Button inverted color='green' floated="right" onClick={() => this.refs.sidenav.toggleVisibility()}>Toggle Visibility</Button>
          </Segment>
        </Container>

        <Container>
          <Segment inverted clearing>
            <Header as='h3'>Application Content</Header>
            <Image src='http://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
            <Button inverted color='green' floated="right" onClick={() => this.refs.sidenav.toggleVisibility()}>Toggle Visibility</Button>
          </Segment>
        </Container>


      </div>
    )
  }

}
