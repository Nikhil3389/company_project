# React Component Code Solution Review

## Introduction

Based on the code below answer the following queries:
1. Explain what the simple `List` component does.

Ans: The simple List component is a React functional component that displays a list of items passed as props. Each item is rendered using the SingleListItem component, which can be toggled between selected and unselected states by clicking on it.

The List component receives an array of objects as its 'items' prop. Each object in the array must have a 'text' property, which is used to display the item's text in the UI.

2. What problems / warnings are there with code?

Ans: The code has one problem: The 'isSelected' prop passed to the SingleListItem component should be a boolean value indicating whether the current item is selected or not. However, in the current implementation, it is passed the selectedIndex state variable, which is initially undefined and then set to the index of the selected item. This will cause the isSelected prop to be truthy, regardless of whether the item is actually selected or not. To fix this issue, isSelected should be set to a boolean value based on a comparison between the current item index and the selectedIndex state variable.


3. Please fix, optimize, and/or modify the component as much as you think is necessary.

Ans: To fix this issue, we need to change the isSelected prop to be a boolean value that indicates whether the current item is selected or not. We can do this by comparing the current index prop with the selectedIndex state variable and return true if they match, and false otherwise. Here's the updated code for the SingleListItem component:

## Code

```javascript

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

```
## data.js
```
export const items = [
  {
    text: 'Nikhil Kumar Kataria',
  },
  {
    text: 'Subh',
  },
  {
    text: 'aakarshit',
  },
];
```
## List.jsx
```


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
```
## SingleListItem.jsx

```
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

```
