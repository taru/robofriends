import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input 
            type="search" 
            placeholder="Robot name"
            className="pa3 ba bg-lightest-blue" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;