import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './SearchPanel/Search';
import NavBar from './NavBar';
import '../css/header.css';

// navbar along top of page

const AppHeader = styled.header
`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
border: 1px solid #555;
overflow: hidden;
background-color: #efefef;
`;

function Header() {
  return (
    <AppHeader>
        <Logo />
        <Search />
        <NavBar />
    </AppHeader>
  );
}

export default Header;