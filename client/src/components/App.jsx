import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      page:'home',
    }
  };

  render(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
};