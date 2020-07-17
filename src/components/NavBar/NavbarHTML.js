import React from 'react';
import '../../css/navbar.css';


// navbar along top of page

class NavBarHTML extends React.Component {

  render() {
    return (
        <nav className="header--nav-navigation">
            <ul className="nav-menu">
                <li className="menu-item"><a href="https://localhost:3000" className="item-link">View Lists</a></li>
                <li className="menu-item"><a href="https://localhost:3000" className="item-link">Create List</a></li>
                <li className="menu-item"><a href="https://localhost:3000" className="item-link">Login/Logout</a></li>
            </ul>
        </nav>
    )
  }
}

export default NavBarHTML;
