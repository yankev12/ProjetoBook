import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

 class ListBooks extends Component {


  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

   render() {


    let shelfType = [
   {title: 'currentlyReading', name: 'Currently Reading'}, 
   {title: 'wantToRead', name: 'Want To Read'},
   {title: 'read', name: 'Read'}
]      
   
    const { books } = this.props;
    const changeShelf = this.props.changeShelf;
    console.log('Props', this.props)

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
          <div className="open-search">
              <Link to="/store">Search</Link>
            </div>         
        </div>
      
     )
   }
 }
 
 export default ListBooks