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
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }


  render() {

     let shelfType = [
   {title: 'currentlyReading', name: 'Currently Reading'}, 
   {title: 'wantToRead', name: 'Want To Read'},
   {title: 'read', name: 'Read'}
]      
   
    
    

  	const { query } = this.state
    const { books } = this.props;
    const changeShelf = this.props.changeShelf;
    console.log('Props', this.props)
    const maxValue = 20
    const teste = 'Art'
    var updatedBooks;

   
      
     
        BooksAPI.search(teste, 20).then((books) => {      
      this.setState({ updatedBooks: books })      
    })
     
      
  
     
    return (
    	<div className = 'search-books'>
	    	<div className='search-books-bar'>
	    	<Link className="close-search"  to="/">Close</Link>
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
            
            {shelfType.map((shelfi) => (

           <BookShelf books={this.state.updatedBooks}
            changeShelf={changeShelf}
            name={shelfi.name}
           />
          ))} 
    		</div>
    	</div>
      
    )
  }
}

export default StoreBooks