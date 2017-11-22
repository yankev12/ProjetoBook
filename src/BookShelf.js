import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {

static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired  
  }

  
  render(){

      let showingBooksCR = this.props.books;
      const changeShelf = this.props.changeShelf;
      const name = this.props.name;


    return(

                          <div className = "bookshelf" key={changeShelf.name}>
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
}
export default BookShelf



