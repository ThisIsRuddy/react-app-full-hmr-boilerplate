import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Layout from './Layout';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Layout/>
    );
  }

}