import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {

    return (
      <form onSubmit={this.props.onSubmit}>
        <input placeholder='Type todo'>
        </input>
        <button type='submit'>Add Todo</button>
        <br/>
        <br/>

        <button>Hide Completed</button>

      </form>
    )
  }
}
