import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
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
    const updatedBooks = this.state
    this.setState({bookcases : this.props.books})
    if(this.state.bookcases.filter((book) => match.test(book.title))){
      this.setState({bookcases: this.state.bookcases.filter((book) => match.test(book.title))})
    }
    

    if(query){

          BooksAPI.search(query, 20).then((newBooks) => {
          if(newBooks.length >= 1){
            newBooks = newBooks.filter((newBook) => match.test(newBook.title))           
          }
          this.setState({updatedBooks : newBooks}) 

          if(this.state.updatedBooks){
          this.state.updatedBooks.map((updatedBook) =>{
            this.setState({teste: ''});
            this.setState({teste: this.state.bookcases.find(bookcase => bookcase.id === updatedBook.id)});
                if(this.state.teste && this.state.teste !== ''){
                  updatedBook.shelf = this.state.teste.shelf;
                }else{
                    updatedBook.shelf = 'none';
                     this.state.bookcases.concat([this.state.updatedBooks])
                }
                this.setState({updatedBooks: this.state.updatedBooks})
            
            this.setState({teste: ''});
          })
          }
          })
          
    }

  }

  render() {
    
    const changeShelf=this.props.changeShelf;

    
    return (
    	<div className='search-books'>
	    	<div className='search-books-bar'>
	    	<Link className="close-search"  to="/">Close</Link>
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
           <BookShelf books={this.state.updatedBooks }
            changeShelf={changeShelf}
           />
          )} 
            
    		</div>
    	</div>
      
    )
  }
}

export default StoreBooks