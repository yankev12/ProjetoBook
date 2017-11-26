import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import { Debounce } from 'react-throttle'

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

    const teste = this.state
    const bookcases = this.state
    this.setState({bookcases : this.props.books})

    if(query !== '' && this.state.bookcases !== ''){

          BooksAPI.search(query, 20).then((newBooks) => {
          console.log('State', this.state);
          newBooks.map((newBook)=>(
                  this.setState({bookcases: this.state.bookcases.find(bookcase => bookcase.title === newBook.title).concat([ newBooks ])})

          ))
     
          newBooks = this.state.bookcases
          

          this.setState({ updatedBooks :  this.state.bookcases })
          
          })
           
    }

  }

  render() {
    
    
  	const { query }=this.state
    const updatedBooks=this.state
    const books =this.props
    const changeShelf=this.props.changeShelf;

    
    return (
    	<div className='search-books'>
	    	<div className='search-books-bar'>
	    	<Link className="close-search"  to = "/">Close</Link>
	    		<div>
          <Debounce time="100" handler="onChange">
		    		<input
		    			type='text'
		    			placeholder='Search books'
		    			onChange={(event) => this.updateQuery(event.target.value)}
		    		/>
            </Debounce>
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