import React from 'react';
// import Mallika from './Admin';  // if we write export at downside not in declaration then we can give change name
import {Admin} from './Admin';

const Person = ()=>{
    const name = 'Mallika';
    const role = 'Backend Developer';
    const Person = {
      email:'allimallika19@gmail.com',
      place:'AndhraPradesh',
    }
return(
    <>
    <div>
      <h1>Hi! This is {name}, {role}</h1>
      <p>This is React Lecture.</p>
    </div>
    <div>
      <h1>My mail Id is {Person.email}</h1>
      <h3>I am from {Person.place}</h3>
    </div>
    <Admin/>
    </>
)
}

export default Person;