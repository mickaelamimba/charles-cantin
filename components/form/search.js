import React from 'react';

const Search = ({handleChange, handleSearch}) => {
    return (
        <form className='my-4'>
           <input onChange={handleChange} value={handleSearch} type='text' placeholder='Recherche'/>
        </form>
    );
};

export default Search;