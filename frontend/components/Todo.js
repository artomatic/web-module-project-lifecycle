import React from 'react'

export default class Todo extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <p key={this.props.todo.id}>{this.props.todo.name}</p>
    )
  }
}
