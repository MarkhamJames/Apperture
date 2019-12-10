import React from 'react'
import { Link } from 'react-router-dom'

export default function LocaleList(props) {
  window.scrollTo(0, 0)
  return (
    <div id="locale-list">
      <div id='hero'>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <div id='title-box'>
        </div>
        <div id='mission-box'>
          <p id='mission'>New York, through the looking glass</p>
        </div>
      </div>
      <div id='top-box'>
        <h2 id='top'>New York is your canvas</h2>
      </div>
      {props.locales.map(locale => (
        <Link id='locale-box' key={locale.id} to={`/oneLocale/${locale.id}`}>
          <div id='locale-overlay'>
            <h3 id='locale-name'>{locale.name}</h3>
            <line id='line'></line>
          </div>
          <img src={locale.image_url} alt={locale.id} id='locale-image' />
        </Link>
      ))}
    </div>
  )
}
