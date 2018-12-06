import React, { Component } from 'react';
import axios from 'axios';
import content from '../../../website';

export default class App extends Component{
  constructor(props){
    super(props),
    this.state({
      page:'',
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


};