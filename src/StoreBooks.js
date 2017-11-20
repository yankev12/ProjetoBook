import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class StoreBooks extends Component {

	state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
  	const { query } = this.state
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

    		</div>
    	</div>
      
    )
  }
}

export default StoreBooks