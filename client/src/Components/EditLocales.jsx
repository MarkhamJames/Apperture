import React, { Component } from 'react'

export default class EditLocales extends Component {
  state = {
    name: "",
    description: "",
    image_url: ""
  }

  setFormData = () => {
    if (this.props.locales.length) {
      const {
        name,
        description,
        image_url,
      } = this.props.locales.find(locale => {
        return locale.id === parseInt(this.props.localeId)
      })
      this.setState({
        name,
        description,
        image_url
      })
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      this.setFormData();
    }
  }

  render() {
    window.scrollTo(0, 0)
    const { name, image_url, description } = this.state;
    return (
      <div className="createMain" id='login-box'>
        <form className='create' id='login-page' onSubmit={(e) => {
          e.preventDefault();
          this.props.updateLocale(this.props.localeId, this.state);
        }}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="name"
            id="username"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="image_url">Image Url</label>
          <input
            type="text"
            name="image_url"
            id="username"
            value={image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <button className="createButton">Submit</button>
        </form>
      </div>
    )
  }
}
