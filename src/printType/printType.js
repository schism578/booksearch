import React from 'react';
import './printType.css';

export default function PrintType() {

    return (
        <div className='print-type'>
            <label>Print Type:  </label>
            <select name="printType">
                <option value='all'>All</option>
                <option value='books'>Books</option>
                <option value='magazines'>magazines</option>
            </select>
        </div>
    )
}