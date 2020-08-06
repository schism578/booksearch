import React from 'react';
import './searchResults.css';

export default class SearchResults extends React.Component {

    render() {
        
        let authors;
        if(this.props.authors === undefined){
            authors = 'No Authors';
        } else{
            authors = this.props.authors.join(', ');
        }
           
        let saleability = this.props.saleability;
        if(saleability === 'FREE'){
            return ( 
                <div className='results-content'>   
                    <li>
                        <h2>{this.props.title}</h2> 
                            <a href={this.props.info_link} target='_blank' rel="noopener noreferrer">
                            <img src={this.props.thumbnail_URL} className='results-image' alt='{this.props.title} book cover' />
                            </a>
                        <div>
                            <h3>Authors: {this.props.authors}</h3>
                            <h4>Price: Free</h4>
                            {this.props.description}
                        </div>
                    </li>
                </div>
                );
            } else {
                let price = this.props.price;
                const priceTag = (price) ? 
                    <h4>Price: 
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(price.amount) }
                    </h4> : false;
                    return ( 
                        <div className='results-content'>    
                            <li>
                                <h2>{this.props.title}</h2>
                                <a href={this.props.info_link} target='_blank' rel="noopener noreferrer">
                                <img src={this.props.thumbnail_URL} className='results-image' alt='{this.props.title} book cover' />
                                </a>
                            <div>
                                <h3>Authors: {authors}</h3>
                                {priceTag}
                                {this.props.description}
                            </div>
                            </li>
                        </div>
                    );
            }
    }
    
}