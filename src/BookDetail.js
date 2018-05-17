import React from 'react'
import PropTypes from 'prop-types'

function BookDetail(props){
  const { title, authors, imageLinks, shelf } = props.book
  let shelfSelect = ''

  if (!shelf) {
    shelfSelect = 'none'
  } else {
    shelfSelect = shelf
  }

  // alert(Object.keys(imageLinks))


  return(
    <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${imageLinks.smallThumbnail})`
              }}>
            </div>
            <div className="book-shelf-changer">
              <select defaultValue={shelfSelect} onChange={(e) => props.onUpdateBook(props.book, e.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>

          <div className="book-authors">{authors}</div>
        </div>
    </div>
  )
}

export default BookDetail
