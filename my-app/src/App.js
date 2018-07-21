import React, { Component } from 'react';
import './App.css';
// importing Projects from component folder
import Projects from './Components/Projects'
// create a constructor to add state

/*

  ** You want top of your applications in state
  and then pass it down through other components
  through properties

  Data should be immutable 
  **SHOULD GO FROM TOP DOWN

*/

/*
        SUMMARY
        1.) Setting our state in our main app component (Projects)
        2.) mapping it into projects as a property
        3.) inside projects were mapping through our array
        4.) outputting a project output component where
            each project outputs the title and the category


*/

class App extends Component {
  constructor(){
    // this is where you would define state keys
    // when you put a constructor you need to call super
    super();
    this.state = {
      //set projects into state
      projects: []
    }
  }

  //lifecycle method fires every time componenet is rerendered
  /* THIS IS WHERE YOU WOULD PUT YOUR AJAX CALLS (In the life cycle method) */
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title : 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }
  render() {
    return (
      // can only have one main div on the top level
      // calling projects component
      // mapping projects as a property <Projects projects ={} />
      <div className="App">
        My App
        
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
