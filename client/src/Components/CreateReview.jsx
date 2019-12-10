import React, { Component } from 'react'

export default class CreateReview extends Component {
  state = {
    content: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id='create-box'>
        <form id='create-review' onSubmit={(e) => {
          e.preventDefault()
          this.props.createReview(this.props.localeId, this.state)
          this.setState({ content: '' })
        }}>
          <textarea autoFocus placeholder='Write Review Here' id='review-area' name='content' value={this.state.content} onChange={this.handleChange}>
          </textarea>
          <button id='submit-review'>Submit Review</button>
        </form>
      </div >
    )
  }
}
