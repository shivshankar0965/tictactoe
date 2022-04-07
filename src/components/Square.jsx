import React from 'react';

const Square = ({ value, onClick }) => {
  console.log('squre rerender');
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
