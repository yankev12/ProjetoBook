import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

export const ListBooks = props => {

ListBooks.propTypes ={
books: React.PropTypes.array.isRequired,
changeShelf: React.PropTypes.func.isRequired,
}  

let shelfType = [
   {title: 'currentlyReading', name: 'Currently Reading'}, 
   {title: 'wantToRead', name: 'Want To Read'},
   {title: 'read', name: 'Read'}
]
        
    const { books } = props;
    const changeShelf = props.changeShelf;

     return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          
            {shelfType.map((shelfi) => (

           <BookShelf books={books.filter(book=> shelfi.title === book.shelf)}
            changeShelf={changeShelf}
            name={shelfi.name}
            key={shelfi.title}
           />
          ))} 
          <div className="open-search">
              <Link to="/search">Search </Link>
            </div>         
        </div>
      
     )
   
 }
 
 export default ListBooks