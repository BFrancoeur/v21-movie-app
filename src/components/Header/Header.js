import React from 'react';

// navbar along top of page

function Header() {
  return (
    <header className="app-header">
        <div className="logo">
            <img src="" alt="" />
        </div>
        <nav className="app-navigation">
            <ul className="nav-menu">
                <li class="menu-item"><a href="#">View Lists</a></li>
                <li class="menu-item"><a href="#">Create List</a></li>
                <li class="menu-item"><a href="#">Login</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;