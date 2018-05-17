import React,  { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'


import BookDetail from './BookDetail'

class BookSearch extends Component{

  state = {
    query: ''
  }

  updateQuery(query){
    this.setState({ query: query.trim() })
  }

  clearQuery(){
    this.updateQuery('')
  }

  render(){

    const { books, onClickBack, onUpdateBook } = this.props
    const { query } = this.state
    let showingBooks

    if (query) {
     const match = new RegExp(escapeRegExp(query), 'i')

     showingBooks = books.filter((book) => (match.exec(book.title)))
     showingBooks.push.apply(showingBooks, (books.filter((book) => (match.exec(book.authors)))))
     const set = new Set(showingBooks)
     showingBooks = Array.from(set)

    } else {
     showingBooks = books
    }

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => onClickBack() }>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {showingBooks.map((book) => (
            <li key={book.id}>
                <BookDetail book={book} onUpdateBook={onUpdateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
