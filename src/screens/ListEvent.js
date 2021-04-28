import React from 'react';

const ListEvent = ({ event, remove }) => {
  return (
    <li>
      <span stye={{ margin: '10px', padding: '10px' }}>{event.text}</span>

      <span stye={{ margin: '10px', padding: '10px' }}>{event.date}</span>
      <span stye={{ margin: '20px', padding: '10px' }}>
        <button onClick={remove}>Remove</button>
      </span>
    </li>
  );
};

export default ListEvent;
