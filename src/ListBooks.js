import React, { Component } from 'react'
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

 class ListBooks extends Component {


  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    changeShelf: this.props
  }

   render() {


    let shelfType = [
   {title: 'currentlyReading'}, 
   {title: 'wantToRead'},
   {title: 'read'}
]      
   
    const { query } = this.state
    const match = new RegExp(escapeRegExp(query), 'i')
    const { books } = this.props;
    console.log('Props', this.props)
    const changeShelf = this.props.changeShelf;

     return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

        {shelfType.map((shelfi) => (
                 <BookShelf books={books.filter(book=> shelfi.title === book.shelf)}
                  changeShelf={changeShelf}
                 /> 
                   
                ))}
               
        </div>
      
     )
   }
 }
 
 export default ListBooks