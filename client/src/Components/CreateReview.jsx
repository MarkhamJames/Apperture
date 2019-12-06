import React, { Component } from 'react'

export default class CreateReview extends Component {
  state = {
    review: '',
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
          this.setState({ review: '' })
        }}>
          <textarea autoFocus placeholder='Write Review Here' id='review-area' name='review' value={this.state.review} onChange={this.handleChange}>
          </textarea>
          <button id='submit-review'>Submit Review</button>
        </form>
      </div >
    )
  }
}
