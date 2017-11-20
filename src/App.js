import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import StoreBooks from './StoreBooks'
import './App.css'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by';



class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = ( changeBook, changeShelf ) => {
    BooksAPI.update(changeBook, changeShelf).then(book =>{
      changeBook.shelf = changeShelf
      var updatedBooks = this.state.books.filter( book => book.id !== changeBook.id )
      updatedBooks.push(changeBook);
      this.setState({ books: updatedBooks })
      
    })
  }

  render() {
    

      return (
        <div>
       <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            changeShelf ={this.changeShelf}
          />
        )}/>
    <Route path='/store' component={StoreBooks}/>
    </div>
    )
  }
}

export default BooksApp
