import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    // can now access projects from projects component > console.log(this.props);
    /*
        when you have an array of objects you usually want to create a seperate
        component for each object and you want to map through those projects
        and output that component
        ** in components create a new file projectitem.js
    */
    //getting projects and mapping through them
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // checking projects console.log(project);
        // going to put project item component and pass in each project
        return (
          // left off here at 21:57
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      // can only have one main div on the top level
      // can call properties using this.props from App  
      <div className="Projects">
        <h3> Latest Projects </h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
