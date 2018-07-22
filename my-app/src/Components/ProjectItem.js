import React, { Component } from 'react';


class ProjectItem extends Component {
  // we need to pass it up to the main component in order to delete
  //we need to pass it up to projects then to the main component
  deleteProject(id){
    this.props.onDelete(id);
    // test console.log('test');
  }
  
  render() {
  
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
