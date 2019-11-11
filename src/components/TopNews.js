import React, { Component } from 'react';
import axios from 'axios';

import NewsInformation from './NewsInformation';

export default class TopNews extends Component {
  state = {
    topNews: {
      isLoading: false,
      isError: false,
      data: [],
    }
  };

  componentDidMount() {
    this.gettopNewsIds();
  }

  async gettopNewsIds() {
    let topNews = { ...this.state.topNews, isLoading: true, }
    this.setState({
      topNews,
    });
    try {
      const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
      const topsNewsIdArr = response.data.slice(0, 15);
      const topNewsArr = [];
      topsNewsIdArr.forEach(async (newsId, index, arr) => {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
        console.log(response.data);
        topNewsArr.push(response.data);

        console.log('index', index);
        console.log('arr', arr.length);

        if (index === arr.length - 1) {
          topNews = { ...this.state.topNews, isLoading: false, data: topNewsArr }
          this.setState({
            topNews,
          });
        }
      });

    } catch (error) {
      topNews = { ...this.state.topNews, isError: true, isLoading: false }
      this.setState({
        topNews,
      });
    }
  }

  renderTopNews() {
    const { isLoading, isError, data } = this.state.topNews;
    if (isLoading) {
      return <div>Loading</div>
    } else if (isError) {
      return <div>Error in fetch data</div>
    } else if (data) {
      console.log('data ', data);
      return data.map((news, index) => <NewsInformation news={news} key={index} />)
    }
  }

  render() {
    console.log(this.state.topNews);
    return (
      <React.Fragment>
        {this.renderTopNews()}
      </React.Fragment>
    );
  }
}
