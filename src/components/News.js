import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    news: {
      isLoading: false,
      isError: false,
      data: null
    },
    newsId: '',
  };

  handleChange = (event) => {
    this.setState({ newsId: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.newsId);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          News id:
          <input type="text" name="newsId" value={this.state.newsId} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
