
import { useState } from 'react';
import Book from './components/Book';
import bookList from './models/books.json';



function App() {
  const books = bookList
  return ( 
      <div> {books.map(item => <Book data ={item}/>) }
       </div>)
}

function addBook() {
    console.log('The Book $ {title} was clicked');
  }

export default App;

