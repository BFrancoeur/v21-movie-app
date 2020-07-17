import React from 'react';
// import styled from 'styled-components';
import '../../css/search.css';

// the portion of the page containing various searching components.

function SearchHTML() {
  return (
    <div className="header--div-search">
          <input type="search" name="search" id="search" placeholder="Enter movie title, genre, or actor..." />
          <span><i className="material-icons">&#xe8b6;</i></span>
    </div>
  );
}

export default SearchHTML;
