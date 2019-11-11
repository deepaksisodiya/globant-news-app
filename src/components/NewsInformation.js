import React from 'react';
import PropTypes from 'prop-types';

const NewsInformation = props => {
  const {
    news
  } = props;

  return (
    <div className="news-information">
      <p>Title. {news.title}</p>
      <p>By. {news.by}</p>
      <p>time. {news.time}</p>
      <p>url. {news.url}</p>
    </div>
  );
};

NewsInformation.propTypes = {
  news: PropTypes.object,
};

export default NewsInformation;
