import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
//added npm package to create unique identitfier
import uuid from 'uuid'
// NOTICE ref in the input feild will help get the value of the form
class AddProject extends Component {
    //store data we submit into state so adding a constructor
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }


    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    //method gets the form onSubmit (There is also on click)
    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required');
        } else {
            this.setState({newProject:{
                id:uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }},function(){
                //console.log(this.state);
                // using props to add to the main app componenet
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label> <br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>

                    </div>
                    <br />
                    <input type="submit" value="submit" />
                    <br />
                </form>
            </div>
        );
    }
}

export default AddProject;
