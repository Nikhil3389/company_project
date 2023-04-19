import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './SingleListItem.jsx';

// List Component
const List = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = useCallback(index => {
    setSelectedIndex(index);
  }, []);

  const memoizedItems = useMemo(
    () =>
      items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      )),
    [items, handleClick, selectedIndex]
  );

  return (
    <ul style={{ textAlign: 'left', listStyleType: 'none', padding: 0 }}>
      {memoizedItems}
      <style>
        {`
          li:hover {
            cursor: pointer;
            background-color: #f8f8f8;
          }
        `}
      </style>
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

export default List;
