import React from 'react';
import PropTypes from 'prop-types';

const NewsInformation = props => {
  const {
    news
  } = props;

  return (
    <React.Fragment>
      <p>Title. {news.title}</p>
      <p>By. {news.by}</p>
      <p>time. {news.time}</p>
      <p>url. {news.url}</p>
    </React.Fragment>
  );
};

NewsInformation.propTypes = {
  news: PropTypes.object,
};

export default NewsInformation;
