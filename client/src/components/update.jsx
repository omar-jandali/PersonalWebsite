import React, { Component } from 'react';

export default function Update(props){
  return(
    <div>
      <form>
        <h3>Education</h3>
        <label>
          School:
          <input type="text" name="school"/>
        </label><br/>
        <label>
          Major:
          <input type="text" name="major"/>
        </label><br/>
        <label>
          grad:
          <input type="number" name="grad"/>
        </label><br/>
        <label>
          image:
          <input type="text" name="image"/>
        </label><br/>
        <input type="submit" name="submit" value="submit"/>
      </form>
    </div>
  )
}