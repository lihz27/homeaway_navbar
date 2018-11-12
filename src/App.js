import React from 'react';
import TopNav from '../src/components/Nav/TopNav.js';
import Form from '../src/components/Nav/Form.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div id="wrapper">
        <TopNav/>
      </div>
    ) 
  }
}