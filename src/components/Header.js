import React from 'react';
// import styled from 'styled-components';
import Logo from './Logo';
import Search from './SearchPanel/Search';
import NavBar from './NavBar';
import '../css/header.css';

// navbar along top of page

function Header() {
  return (
    <header className="header--app">
        <Logo />
        <Search />
        <NavBar />
    </header>
  );
}

export default Header;