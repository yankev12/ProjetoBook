import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
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
    showSearchPage: false
  }
  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    
    <Route exact path='/' render={() => (
          <ListBooks
            bookss={this.state.books}
          />
        )}/>

    return (
        <div>
         <ListBooks 
          books={this.state.books}
         />
        </div>
    )
  }
}

export default BooksApp
