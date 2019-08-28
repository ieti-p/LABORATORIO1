import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          //Add your code here to represent a TODO
          //<h2>{this.props.todos.text}  ... {this.props.todos.priority}...{this.props.todos. dueDate}</h2>
          //<h2>{this.props.priority}  ... </h2>
          //
          //<h2>{this.props.dueDate}  ... </h2>
          <h2>{this.props.priority}  ... {this.props.text}....</h2>
          //<h2>{this.props.text}  ... </h2>
          //<h2>{this.props.dueDate}  ... </h2>


        );
    }

}