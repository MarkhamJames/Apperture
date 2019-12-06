import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUserLocales, getOneUser } from '../services/api-helper'

export default class UserProfile extends Component {
  state = {
    userLocales: [],
    user: ''
  }

  componentDidMount() {
    this.setUserLocales(this.props.userId)
    this.setUser(this.props.userId)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.localeId !== this.props.localeId) {
      this.setUserlocales()
    }
  }

  setUserLocales = async (userId) => {
    const userLocales = await getUserLocales(userId)
    this.setState({ userLocales })
  }

  setUser = async (userId) => {
    const user = await getOneUser(userId)
    this.setState({
      user
    })
  }


  render() {
    window.scrollTo(0, 0)
    return (
      <div id='locale-list'>
        <h1 id='profile-user'>{this.state.user.username}'s Locales</h1>
        {
          this.state.userLocales.map(locale => (
            <>
              <Link id='locale-box' key={locale.id} to={`/oneLocale/${locale.id}`}>
                <div id='locale-overlay'>
                  <h3 id='locale-name'>{locale.name}</h3>
                  <line id='line'></line>
                </div>
                <img src={locale.image_url} alt={locale.id} id='locale-image' />
              </Link>
            </>
          ))
        }
      </div >
    )
  }
}