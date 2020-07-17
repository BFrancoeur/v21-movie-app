import React from 'react';
// import NavBar from '../NavBar/NavBar';
import NavBarHTML from '../NavBar/NavbarHTML';
import LogoHTML from '../Logo/LogoHTML';
import '../../css/header.css';

// navbar along top of page

function Header() {
  return (
    <header className="app-header">
        <LogoHTML />
        <NavBarHTML />
    </header>
  );
}

export default Header;