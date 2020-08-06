import React from 'react';
import './bookType.css';

export default function BookType() {

    return (
        <div className='book-type'>
            <label>Book Type:  </label>
                <select name='filter'>
                    <option value='ebooks'>ebooks</option>
                    <option value='free-ebooks'>Free-ebooks</option>
                    <option value='full'>Full</option>
                    <option value='paid-ebooks'>Paid</option>
                    <option value='partial'>previews</option>
                </select>
        </div>
    )
}