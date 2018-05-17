import React from 'react'

import BookList from './BookList'

function BookCase(props){

  const { books, onUpdateBook, onClickSearch } = props

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookList
          title='Currently Reading'
          onUpdateBook={onUpdateBook}
          books={books.filter((book) =>
            book.shelf === "currentlyReading")}
        />
        <BookList
          title='Want to Read'
          onUpdateBook={onUpdateBook}
          books={books.filter((book) =>
            book.shelf === "wantToRead")}
         />
        <BookList
          title='Read'
          onUpdateBook={onUpdateBook}
          books={books.filter((book) =>
            book.shelf === "read")}
        />
      </div>
      <div className="open-search">
        <a onClick={() => onClickSearch(true)}>Add a book</a>
      </div>
    </div>
  )
}

export default BookCase
