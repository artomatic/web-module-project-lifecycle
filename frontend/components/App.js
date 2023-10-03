import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      todoData: [],
      newTodo: ''
    }
  }

  onChange = (event) => {

  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    this.setState( {todoData})
  }

  componentDidMount() {
    console.log('componentDidMount')
    axios.get(URL)
      .then (response => {
        this.setState({todoData: response.data})
      })
  }

  render() {
    
    return (
      <div>
      <TodoList todos = {this.state.todoData}/>
      <Form todos = {this.state.todoData} onSubmit = {this.onSubmit}/>
      </div>
    )
  }
}
