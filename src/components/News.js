import React, { Component } from 'react';
import axios from 'axios';

import NewsInformation from './NewsInformation';

export default class Header extends Component {
  state = {
    news: {
      isLoading: false,
      isError: false,
      data: null,
    },
    newsId: '',
  };

  handleChange = (event) => {
    this.setState({ newsId: event.target.value });
  }

  handleSubmit = (event) => {
    this.getUser();
    event.preventDefault();
  }

  async getUser() {
    let news = { ...this.state.news, isLoading: true, }
    this.setState({
      news,
    });
    try {
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.newsId}.json?print=pretty`);
      news = { ...this.state.news, isLoading: false, data: response.data }
      this.setState({
        news,
      });
    } catch (error) {
      news = { ...this.state.news, isError: true, isLoading: false }
      this.setState({
        news,
      });
    }
  }

  renderNewsInformation = () => {
    const { isLoading, isError, data } = this.state.news;
    if (isLoading) {
      return <div>Loading</div>
    } else if (isError) {
      return <div>Error in fetch data</div>
    } else if (data) {
      return <NewsInformation news={data} />
    }
  }

  render() {
    console.log(this.state.news);
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            News id:
          <input type="text" name="newsId" value={this.state.newsId} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.renderNewsInformation()}
      </React.Fragment>
    );
  }
}
