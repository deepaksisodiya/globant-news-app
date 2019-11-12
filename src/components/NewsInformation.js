import React from 'react';
import PropTypes from 'prop-types';

const NewsInformation = props => {
  const {
    news: {
      title,
      by,
      time,
      url
    }
  } = props;

  return (
    <div className="card">
      <p><b>Title: </b>{title}</p>
      <p><b>By: </b>{by}</p>
      <p><b>Time: </b>{new Date(time).toDateString()}</p>
      <p><b>URL: </b>{url}</p>
    </div>
  );
};

NewsInformation.propTypes = {
  news: PropTypes.object,
};

export default NewsInformation;
