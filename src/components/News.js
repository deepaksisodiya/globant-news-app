import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import NewsInformation from './NewsInformation';

class News extends Component {
  state = {
    newsId: '',
  };

  propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    getNews: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const newsId = this.props.match.params.newsId;
    if (newsId) this.props.getNews(newsId);
  }

  handleChange = (event) => {
    this.setState({ newsId: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.getNews(this.state.newsId);
    event.preventDefault();
  }

  renderNewsInformation = () => {
    const { isLoading, isError, data } = this.props;
    if (isLoading) {
      return <div>Loading</div>
    } else if (isError) {
      return <div>Error in fetch data</div>
    } else if (data) {
      return <NewsInformation news={data} />
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="form">
          <label>News id</label>
          <input type="text" name="newsId" value={this.state.newsId} onChange={this.handleChange} />
          <input type="submit" value="Submit" className="button" />
        </form>
        {this.renderNewsInformation()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.news.isLoading,
    isError: state.news.isError,
    data: state.news.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (newsId) => {
      dispatch({
        type: 'NEWS_FETCH_REQUESTED',
        payload: newsId
      });
    }
  };
};

const NewsWithRouter = withRouter(News);
export default connect(mapStateToProps, mapDispatchToProps)(NewsWithRouter);
