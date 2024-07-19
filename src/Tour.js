import React, { useState } from 'react';
import './App.css'; 

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <span className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? ' show less' : '  read more'}
          </span>
        </p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </article>
  );
};

export default Tour;