import React from 'react';
import './searchTerm.css';
import BookType from '../bookType/bookType';
import PrintType from '../printType/printType';

export default class SearchTerm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch}>
                    <fieldset>
                        <div className='search-row'>
                            <label>Search:  </label>
                            <input 
                                type='text' 
                                name='q' 
                                className='search-bar' 
                                placeholder='e.g. The Hobbit' 
                                required 
                            />
                            <button onClick={e => this.props.displayResults}>Search</button>
                        </div>
                        <div className='search-parameters'>
                            <PrintType />
                            <BookType />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}