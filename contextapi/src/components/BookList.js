import React, { Component } from 'react';

class BookList extends React.Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Harry Potter</li>
          <li>Lord of the rings</li>
          <li>The new way of life</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
