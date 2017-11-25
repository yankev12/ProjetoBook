import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


export const BookShelf = props => {

BookShelf.propTypes ={
books: React.PropTypes.array.isRequired,
changeShelf: React.PropTypes.func.isRequired,
}  

      let showingBooksCR = props.books;
      const changeShelf = props.changeShelf;
      const name = props.name;


    return(

                          <div className = "bookshelf">
                            <h2 className = "bookshelf-title">{name}</h2>
                              <div className = "bookshelf-books">
                               <ol className ='books-grid'>                    
                                  {showingBooksCR.map((book) =>(
                                    <li key={book.id}>
                                      <div className="book">
                                        <div className="book-top">
                                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                            <select onChange={(evento) => changeShelf(book, evento.target.value)} value="none">
                                              <option value="none" disabled>Move to...</option>
                                              <option value="currentlyReading">Currently Reading</option>
                                              <option value="wantToRead">Want to Read</option>
                                              <option value="read">Read</option>
                                              <option value="none">None</option>
                                            </select>
                                            </div>
                                          </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.authors}</div>
                                        </div>
                                    
                                    </li>
                                       ))}
                               </ol>
                               </div>
                               </div>                                                 
      )
  
}
export default BookShelf



