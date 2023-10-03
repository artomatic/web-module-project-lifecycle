import React from 'react'

export default class Todo extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      (!this.props.hide || (this.props.hide && !this.props.todo.completed)) &&
      <span key={this.props.todo.id}>
      <p  onClick={this.props.handleCompleted} id={this.props.todo.id}>

        {this.props.todo.name} &nbsp; {this.props.todo.completed? '✔️' : ''}

        </p>
        
      </span> 
    )
  }
}
