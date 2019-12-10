import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditReview extends Component {
  state = {
    content: '',
  }

  setFormData = () => {
    console.log(this.props)
    if (this.props.reviews.length) {
      const {
        content
      } = this.props.reviews.find(review => {
        return review.id === parseInt(this.props.reviewId)
      })
      this.setState({
        content
      })
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      this.setFormData();
    }
  }

  render() {
    const { content } = this.state;
    return (
      <div id='create-box'>
        <form id='create-review' onSubmit={(e) => {
          e.preventDefault()
          this.props.updateReview(this.props.reviewId, this.state)
          this.setState({ content: '' })
        }}>
          <textarea autoFocus placeholder='Edit Review Here' id='review-area' name='content' value={this.state.content} onChange={this.handleChange}>
          </textarea>
          <button id='submit-review'>Submit Review</button>
        </form>
      </div >
    )
  }
}
