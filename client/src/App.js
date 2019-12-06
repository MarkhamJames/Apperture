import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { getAllLocales, registerUser, loginUser, verifyUser, deleteLocale, putLocale, postLocale, deleteReview } from './services/api-helper';
import Header from './Components/Header';
import SingleLocale from './Components/SingleLocale';
import RegisterForm from './Components/RegisterForm';
import CreateLocaleForm from './Components/CreateLocaleForm';
import EditLocales from './Components/EditLocales';
import LocaleList from './Components/LocaleList';
import LoginForm from './Components/LoginForm';
import UserProfile from './Components/UserProfile';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    currentUser: '',
    locales: [],
    authErrorMessage: ''
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    } else {
      this.setState({ currentUser })
      this.props.history.push('/')
    }
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData)
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    } else {
      this.setState({ currentUser })
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  destroyLocale = async (userId, localeId) => {
    await deleteLocale(userId, localeId)
    this.setState(prevState => ({
      locales: prevState.locales.filter(locale => {
        return locale.id !== localeId
      })
    }))
    this.props.history.push('/')
  }

  updateLocale = async (localeId, localeData) => {
    const updatedLocale = await putLocale(localeId, localeData);
    this.setState(prevState => ({
      locales: prevState.locales.map(locale => locale.id === parseInt(localeId) ? updatedLocale : locale)
    }))
    this.props.history.push("/")
  }

  createLocale = async (userId, localeData) => {
    const newLocale = await postLocale(userId, localeData)
    this.setState(prevState => ({
      locales: [...prevState.locales, newLocale]
    }))
    this.props.history.push(`/`)
  }



  async componentDidMount() {
    const locales = await getAllLocales()
    this.setState({
      locales
    })
    this.handleVerify();
  }

  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <Route path='/register' render={() => (
          <RegisterForm
            handleRegister={this.handleRegister}
            authErrorMessage={this.state.authErrorMessage}
          />
        )} />
        <Route path='/login' render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
            authErrorMessage={this.state.authErrorMessage}
          />
        )} />
        <Route path='/users/:id/locales' render={(props) => (
          <UserProfile
            currentUser={this.state.currentUser}
            userId={props.match.params.id}
          />
        )} />
        <Route path='/oneLocale/:id' render={(props) => (
          <SingleLocale
            locales={this.state.locales}
            currentUser={this.state.currentUser}
            localeId={props.match.params.id}
            destroyLocale={this.destroyLocale}
            reviews={this.state.reviews}
            destroyReview={this.destroyReview}
          />
        )}
        />
        <Route exact path='/' render={() => (
          <LocaleList locales={this.state.locales}
            currentUser={this.state.currentUser} />
        )} />
        <Route exact path='/locale/new' render={() => (
          <CreateLocaleForm
            createLocale={this.createLocale}
            currentUser={this.state.currentUser}
          />
        )} />
        <Route path='/locale/:id/edit' render={(props) => (
          <EditLocales
            locales={this.state.locales}
            updateLocale={this.updateLocale}
            localeId={props.match.params.id}
          />
        )} />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
