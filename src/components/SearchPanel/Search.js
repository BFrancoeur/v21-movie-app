import React from 'react';
import styled from 'styled-components';
import '../../css/search.css';

// the portion of the page containing various searching components.

const SearchComponent = styled.div
`
  flex: 1 0 40%;
  display: flex;
  padding: 1.4rem 3rem;
  border: 1px solid #555;
`;

const SearchIcon = styled.i
`
transition: all .2s;

&:hover {
  background-color: #ccc;
}
`;
function Search() {
  return (
    <SearchComponent className="header--div-search">
          <input type="search" name="search" id="search" placeholder="Enter movie title, genre, or actor..." />
          <span><SearchIcon className="material-icons">&#xe8b6;</SearchIcon></span>
    </SearchComponent>
  );
}

export default Search;
