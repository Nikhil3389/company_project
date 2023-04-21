import React from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red',
    padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px'
}}
      onClick={() => onClickHandler(index)}
    > 
      {text}
    </li>
  );
};



SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleListItem;
