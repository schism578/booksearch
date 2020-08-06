import React from 'react';
import './searchResults.css';

export default class SearchResults extends React.Component {
    
    render() {
        const url = this.props.infoLink;
        handleImgClick(url) {
            window.location.assign(url)
        }

        let author;
        if(this.props.author === undefined){
            author = 'No Authors';
        } else{
            author = this.props.author.join(', ');
        }
           
        let saleability = this.props.saleability;
        if(saleability === 'FREE'){
            console.log(this.props.info_link)
            return ( 
                <div className='results-content'>   
                    <li>
                        <h2>{this.props.title}</h2> 
                            <img onClick={handleImgClick(this.props.infoLink)} src={this.props.thumbnail_URL} 
                                className='results-image' alt='{this.props.title} book cover' />
                        <div>
                            <h3>Authors: {author}</h3>
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
                                <img onClick={handleImgClick(this.props.infoLink)} src={this.props.thumbnail_URL} 
                                    className='results-image' alt='{this.props.title} book cover' />
                            <div>
                                <h3>Authors: {author}</h3>
                                {priceTag}
                                {this.props.description}
                            </div>
                            </li>
                        </div>
                    );
            }
    }
    
}