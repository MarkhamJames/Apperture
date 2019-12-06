import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateReview from './CreateReview'
import { postReview, getReviews, getOneLocale, getOneUser, deleteReview } from '../services/api-helper'
import ReviewList from './ReviewList'
import axios from 'axios';


export default class SingleLocale extends Component {
  state = {
    currentLocale: null,
    reviews: [],
    user: ''
  }

  destroyReview = async (localeId, reviewId) => {
    await deleteReview(localeId, reviewId)
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => {
        return review.id !== reviewId
      })
    }))
  }

  async componentDidMount() {
    await this.setCurrentLocale()
    await this.setUser(this.state.currentLocale.userId)
    const reviews = await getReviews(this.props.localeId)
    this.setState({
      reviews
    })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.localeId !== this.props.localeId) {
      this.setCurrentGame()
    }
  }

  setCurrentLocale = async () => {
    const response = await axios.get(`http://localhost:3000/locales/${this.props.localeId}`)
    const currentLocale = response.data
    this.setState({
      currentLocale
    })

  }

  createReview = async (userId, localeId, reviewData) => {
    const newReview = await postReview(userId, localeId, reviewData)
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }))
  }

  setUser = async (userId) => {
    const user = await getOneUser(userId)
    this.setState({
      user
    })
  }


  render() {
    window.scrollTo(0, 0)
    const { currentLocale } = this.state
    const { currentUser } = this.props;
    const reviews = this.state.reviews.filter(review => (
      review.localeId == currentLocale.id
    ))
    return (
      <div id='locale-info'>
        {currentLocale && (
          <div id='single-locale'>
            <h1 id='single-locale-title'>{currentLocale.name}</h1>
            <div id='single-locale-box'>
              <img src={currentLocale.image_url} alt={currentLocale.name} id='locale-pic' />
              <p id='locale-description'>{currentLocale.description}</p>
            </div>
            <div id='reviews-box'>
              <CreateReview
                currentUser={currentUser}
                localeId={this.props.localeId}
                createReview={this.createReview}
              />
              <ReviewList
                reviews={reviews}
                currentLocale={currentLocale}
                currentUser={currentUser}
                destroyReview={this.destroyReview}
              />
            </div>
            {
              currentUser.id === currentLocale.userId && (
                <div id='buttons'>
                  <Link to={`/locale/${currentLocale.id}/edit`}><h5 id='edit-locale'>Edit Game</h5></Link>
                  <h5 id='delete-locale' onClick={() => {
                    this.props.destroyLocale(currentUser.id, currentLocale.id)
                  }}>
                    Delete Locale
                    </h5>
                </div>
              )
            }
          </div>
        )
        }
      </div >
    )
  }
}