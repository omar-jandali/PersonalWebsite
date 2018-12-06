import React, { Component } from 'react';
import axios from 'axios';
import content from '../../../website';
import Update from './update';
import Home from './home';

export default class App extends Component{
  constructor(props){
    super(props),
    this.state({
      page:'home',
      skillsLanguages: content.skillsLanguages,
      skillsFrameworks: content.skillsFrameWorks,
      skillsFrontEnd: content.skillsFrontEnd,
      skillsOther: content.skillsOther,
      skillsBackend: content.skillsBackend,
      skillsDeloyment: content.skillsDeloyment,
      skillsTesting: content.skillsTesting,
      contact: content.contact,
      education: [],
      experience: [],
      applications: [],
    },)
  };

  render(){
    if(this.state.page === 'home'){
      return(
        <div>
          <div>
            <a href="">Update</a>
          </div>
        </div>
      )
    }
    if(this.state.page === 'update'){
      return(
        <div>
          <Update />
        </div>
      )
    }
  }
};