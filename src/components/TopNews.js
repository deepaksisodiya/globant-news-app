import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsInformation from './NewsInformation';

class TopNews extends Component {

  propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    getNews: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTopNews();
  }

  renderTopNews() {
    const { isLoading, isError, data } = this.props;
    if (isLoading) {
      return <div>Loading</div>
    } else if (isError) {
      return <div>Error in fetch data</div>
    } else if (data) {
      return data.map((news, index) => <NewsInformation news={news} key={index} />)
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderTopNews()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.topNews.isLoading,
    isError: state.topNews.isError,
    data: state.topNews.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopNews: () => {
      dispatch({
        type: 'TOPNEWS_FETCH_REQUESTED',
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
