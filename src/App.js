import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import StoreBooks from './StoreBooks'
import './App.css'

class BooksApp extends React.Component {


  state= {
    books: [],
    showSearchPage: true
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books)=> {
      this.setState({ books })
    })
  }


  changeShelf = ( changeBook, changeShelf ) => {
    BooksAPI.update(changeBook, changeShelf).then(book =>{
      changeBook.shelf = changeShelf
      this.setState({ books: this.state.books.filter( book => book.id !== changeBook.id ).concat([ changeBook ]) })
    })
 
  }

  render() {
    

      return (
        <div>
       <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
      <Route path='/search' render={({ history })=> (
          <StoreBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
            />
      )}/>
      </div>
    )
  }
}

export default BooksApp
