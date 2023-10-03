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
      hide: false

    }
  }

  handleClear = (event) => {
    event.preventDefault()
    this.setState( {hide: !this.state.hide})
  }

  handleCheckmark = (event) => {
    
    const id = event.target.id
    axios.patch(URL + '/' + id)
      .then (response => {
        console.log(response)
        // window.location.reload()
      })
      .catch (error => {
        console.log(error)
      })

  }

  onSubmit = (event) => {
    event.preventDefault()
    const data = {
      name: event.target[0].value,
      completed: false
    }
    axios.post(URL, data)
      .then (response => {
        console.log(response.data.message)
      })
      .catch (error => {
        console.log(error)
      })
      
  }

  componentDidMount() {
    axios.get(URL)
      .then (response => {
        this.setState({todoData: response.data})
      })
  }

  componentDidUpdate() {
    axios.get(URL)
      .then (response => {
        this.setState({todoData: response.data})
      })
  }

  render() {
    
    return (
      <div>
      <TodoList 
      todos = {this.state.todoData} 
      handleCompleted={this.handleCheckmark}
      hide = {this.state.hide}/>

      <Form 
      todos = {this.state.todoData} 
      onSubmit = {this.onSubmit} 
      handleClear = {this.handleClear}
      hide = {this.state.hide} />

      </div>
    )
  }
}
