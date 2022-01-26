import React from 'react';

function Book(props) {
  return <h1>{
  props.data.volumeInfo.title 

}</h1>;
}

function addBook(title) {
  console.log('The Book $ {title} was clicked');
}

export default Book;

