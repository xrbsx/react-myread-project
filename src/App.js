import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

import './App.css'

import BookList from './BookList'
import BookSearch from './BookSearch'
import BookCase from './BookCase'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      showSearchPage: false,
      bookFilter: []
    }
  }

  componentDidMount() {
    this.loadBooks()
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(e => {
          book.shelf = shelf
          const books = this.state.books.filter(bookFilter => bookFilter.id !== book.id)
          books.push(book)

          this.state.bookFilter.filter(bookFilter => bookFilter.id === book.id)
            .map(bookFilter => bookFilter.shelf = book.shelf)

          this.setState({ books, loading: false })
      })
      .catch(e => this.setState({ loading: false }))

  }

  loadBooks = () => BooksAPI.getAll().then((books) => this.setState({ books }))

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
            <BookSearch
              books={this.state.books}
              onClickBack={() => history.push('/')}
              onUpdateBook={this.updateBook}
            />
        )} />
        <Route exact path='/' render={({ history }) => (
            <BookCase
              books={this.state.books}
              onUpdateBook={this.updateBook}
              onClickSearch={() => history.push('/search')}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp
