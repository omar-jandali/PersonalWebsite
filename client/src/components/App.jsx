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
import Update from './update';
import { timingSafeEqual } from 'crypto';

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      page: 'public',
      skillsLanguages: content.skillsLanguages,
      skillsFrameWorks: content.skillsFrameWorks,
      skillsFrontEnd: content.skillsFrontEnd,
      skillsBackend: content.skillsBackend,
      skillsDeloyment: content.skillsDeloyment,
      skillsTesting: content.skillsTesting,
      skillsOther: content.skillsOther,
      contact: content.contact,
      aboutMe: content.aboutMe,
    }
    this.watchSchool = this.watchSchool.bind(this)
    this.watchMajor = this.watchMajor.bind(this)
    this.watchGrad = this.watchGrad.bind(this)
    this.watchImage = this.watchImage.bind(this)
  };

  watchSchool(e){
    console.log(e.target.value)
  }
  
  watchMajor(e){
    console.log(e.target.value)
    
  }
  
  watchGrad(e){
    
    console.log(e.target.value)
  }
  
  watchImage(e){
    console.log(e.target.value)
    
  }

  getEducation(){

  }

  deleteEducation(){

  }

  render(){
    if(this.state.page === 'public'){
      return(
        <div>
          public
        </div>
      )
    }
    if(this.state.page === 'dev'){
      return(
        <div>
          <Update watchSchool={this.watchSchool} 
                  watchMajor={this.watchMajor}
                  watchGrad={this.watchMajor}
                  watchImage={this.watchImage}/>
        </div>
      )
    }
  }
};