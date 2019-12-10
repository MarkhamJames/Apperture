import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav>
      <Link to='/' id='home'>(App)erture</Link>
      {
        props.currentUser ?
          <div id='header'>
            <Link to={`/users/${props.currentUser.id}/locales`}>
              <p>{props.currentUser.username}</p>
            </Link>
            <Link to='/locale/new' id='add'>
              <div>Add Locale</div>
            </Link>
            <a onClick={props.handleLogout} id='logout'>Logout</a>
          </div>
          :
          <Link to='/login' id='login-nav'><div>Login/Register</div></Link>
      }
    </nav >
  )
}
