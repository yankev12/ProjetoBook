import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class StoreBooks extends Component {

   static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

	state = {
    query: '',
    updatedBooks: ''
  }


  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    const match = new RegExp(escapeRegExp(query), 'i')
    
    if(query === ''){
    }else{
      BooksAPI.search(query, 20).then((books) => {
      books = books.filter((book) => match.test(book.title))      
      this.setState({ updatedBooks :  books })
      })
    }         
  }

  render() {
    
    
    
  	const { query }=this.state
    const updatedBooks=this.state
    const books =this.props
    const changeShelf=this.props.changeShelf;
    console.log('State', this.state)
    
    return (
    	<div className='search-books'>
	    	<div className='search-books-bar'>
	    	<Link className="close-search"  to = "/">Close</Link>
	    		<div>
		    		<input
		    			className=''
		    			type='text'
		    			placeholder='Search books'
		    			value={query}
		    			onChange={(event) => this.updateQuery(event.target.value)}
		    		/>
		    	</div>
    		</div>
    		<div>
            
            {this.state.updatedBooks.length >= 1 &&(
           <BookShelf books={ this.state.updatedBooks }
            changeShelf={changeShelf}
           />
          )} 
            

            
    		</div>
    	</div>
      
    )
  }
}

export default StoreBooks