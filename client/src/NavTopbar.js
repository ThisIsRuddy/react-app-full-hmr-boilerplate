import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'

export default class NavTopbar extends Component {

  constructor() {
    super();
    this.state = {activeItem: 'home'};
  }

  handleItemClick({name}){
    this.setState({activeItem: name})
  };

  render() {
    const {activeItem} = this.state;

    return (
      <Segment inverted>
        <Menu inverted borderless>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
        </Menu>
      </Segment>
    )
  }
}
