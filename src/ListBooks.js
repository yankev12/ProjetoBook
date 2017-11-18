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
    query: ''
  }

   render() {


    let shelfType = [
   {title: 'currentlyReading', name: 'Currently Reading'}, 
   {title: 'wantToRead', name: 'Want To Read'},
   {title: 'read', name: 'Read'}
]      
   
    const { query } = this.state
    const match = new RegExp(escapeRegExp(query), 'i')
    const { books } = this.props;
    console.log('Props', this.props)
    const changeShelf = this.props.changeShelf;
    const nome ='';

     return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

        {shelfType.map((shelfi) => (
                 <BookShelf books={books.filter(book=> shelfi.title === book.shelf)}
                  changeShelf={changeShelf}
                  name={shelfi.name}
                 /> 
                   
                ))}
               
        </div>
      
     )
   }
 }
 
 export default ListBooks