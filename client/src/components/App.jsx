import React, { Component } from 'react';
import axios from 'axios';
import content from '../../../website';
import About from './about/about';
import Application from './applications/applications';
import Contact from './contact/contact';
import Education from './education/education';
import Experience from './experience/experience';
import Features from './features/features';
import Skills from './skills/skills';

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      page: '',
      skillsLanguages: content.skillsLanguages,
      skillsFrameWorks: content.skillsFrameWorks,
      skillsFrontEnd: content.skillsFrontEnd,
      skillsBackend: content.skillsBackend,
      skillsDeloyment: content.skillsDeloyment,
      skillsTesting: content.skillsTesting,
      skillsOther: content.skillsOther,
      contact: content.contact,
      myabout: content.about,
    }
  };

  render(){
    return(
      <div>
        Omar Jandali
      </div>
    )
  }
};