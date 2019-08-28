import React from 'react';
import {Todo} from "./Todo"

export class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //const todos=this.props.items;
        const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
            {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
            {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
       const listItems = todos.map((t) => {
            return (<Todo text={t.text} priority={t.priority} dueDate={t.dueDate} />)
        });
        return (<u1>{listItems}</u1>)
    }

}


