import React from "react"

function Search({search, onSearch}) {
    function handleSearch(e) {
        e.preventDefault();
        onSearch(search)
    }
    return(
        <div className="search-container" onSubmit={handleSearch}>
            <input 
            type="text" 
            placeholder="Search names..." 
            onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
}

export default Search;