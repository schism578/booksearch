import React from 'react';
import './App.css';
import SearchTerm from './searchTerm/searchTerm';
import SearchResults from './searchResults/searchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null,
      params: {
        api_key: 'AIzaSyAj_yC2L365-0DjE-Ab4CK5NcGG4FG7qTI',
        q: '',
        printType: '',
        filter: ''
    }
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
  }

    handleSearch = (e) =>{
      e.preventDefault()
      const data = {}
      const formData = new FormData(e.target)
      for (let value of formData) data[value[0]] = value[1]
      
    this.setState({
      params: data
    })
  
      const searchURL = 'https://www.googleapis.com/books/v1/volumes';
  
      const queryString = this.formatQueryParams(data);
      const url = searchURL + '?' + queryString;
  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        if(data.totalItems === 0) throw new Error('No books found')

        const aBooks = data.items.map( book => {
          const {title,authors,description,imageLinks} = book.volumeInfo
          const {saleability,retailPrice} = book.saleInfo
          const infoLink = book.infoLink
          return {
            title: title,
            author: authors,
            description: description,
            thumbnail_URL: imageLinks.thumbnail,
            info_link: infoLink,
            saleability: saleability,
            price: retailPrice,
          };
        })

        console.log(this.props.volumeInfo)
        console.log(this.props.author)
        console.log(this.props.authors)

        this.setState({
          books: aBooks,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

    render() {
      const errorMessage = this.state.error ? <div>{this.state.error}</div> : false

      let lib = this.state.books

      const books = lib.map(book => { 
        return <SearchResults 
                  title={book.title}
                  author= {book.author}
                  description={book.description}
                  thumbnail_URL={book.thumbnail_URL}
                  info_link={book.info_link}
                  saleability= {book.saleability}
                  price= {book.price}
        />
      });


      return (
        <div className="App">
          <header>
            <h1 className='App-header'>Google Book Search</h1>
          </header> 
          <SearchTerm handleSearch ={this.handleSearch}/>
          {errorMessage}
          <ul className="books-list">
            {books}
          </ul>
        </div>
    )
  };
}

export default App;
