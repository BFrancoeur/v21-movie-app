import React from 'react';
// import styled from 'styled-components';
import LogoHTML from '../Logo/LogoHTML';
import SearchHTML from '../SearchPanel/SearchHTML';
import NavBarHTML from '../NavBar/NavbarHTML';
import '../../css/header.css';

// navbar along top of page

function Header() {
  return (
    <header className="header--app">
        <LogoHTML />
        <SearchHTML />
        <NavBarHTML />
    </header>
  );
}

export default Header;