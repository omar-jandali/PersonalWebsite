import React, { Component } from 'react';

export default function Update(props){
  return(
    <div>
      <form>
        <h3>Education</h3>
        <label>
          School:
          <input onChange={(e) => {props.watchSchool(e)}} type="text" name="school"/>
        </label><br/>
        <label>
          Major:
          <input onChange={(e) => {props.watchMajor(e)}} type="text" name="major"/>
        </label><br/>
        <label>
          grad:
          <input onChange={(e) => {props.watchGrad(e)}} type="number" name="grad"/>
        </label><br/>
        <label>
          image:
          <input onChange={(e) => {props.watchImage(e)}} type="text" name="image"/>
        </label><br/>
        <input type="submit" name="submit" value="Submit"/>
      </form>
      <form>
        <h3>Application</h3>
        <label>
          Name:
          <input type="text" name="name"/>
        </label><br/>
        <label>
          Image:
          <input type="text" name="image"/>
        </label><br/>
        <label>
          tools (seperate by a comma):
          <input type="number" name="tools"/>
        </label><br/>
        <label>
          Description:
          <input type="text" name="description"/>
        </label><br/>
        <label>
          Github:
          <input type="text" name="github"/>
        </label><br/>
        <input type="submit" name="submit" value="Submit"/>
      </form>
      <form>
        <h3>Experience</h3>
        <label>
          Position:
          <input type="text" name="position"/>
        </label><br/>
        <label>
          Company:
          <input type="text" name="company"/>
        </label><br/>
        <label>
          Description:
          <input type="number" name="description"/>
        </label><br/>
        <label>
          From (Year):
          <input type="text" name="from"/>
        </label><br/>
        <label>
          To (Year):
          <input type="text" name="to"/>
        </label><br/>
        <input type="submit" name="submit" value="Submit"/>
      </form>
    </div>
  )
}