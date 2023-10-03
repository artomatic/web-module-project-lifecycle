import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <div>
      {
      this.props.todos.length !== 0? ( this.props.todos.data.map (todo => (
        <Todo key={todo.id} todo = {todo}/>
      )))
      :
      <p>No Todos Available</p>
      }
    </div>
      </div>
    )
  }
}
