import React from 'react';
import PropTypes from 'prop-types';

const NewsInformation = props => {
  const {
    news
  } = props;

  return (
    <div className="card">
      <p><b>Title: </b>{news.title}</p>
      <p><b>By: </b>{news.by}</p>
      <p><b>Time: </b>{news.time}</p>
      <p><b>URL: </b>{news.url}</p>
    </div>
  );
};

NewsInformation.propTypes = {
  news: PropTypes.object,
};

export default NewsInformation;
