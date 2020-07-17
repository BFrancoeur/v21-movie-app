import React from 'react';
import '../../css/navbar.css';


// navbar along top of page

class NavBarHTML extends React.Component {

  render() {
    return (
        <nav className="app-navigation">
            <ul className="nav-menu">
                <li className="menu-item"><a href="#" className="item-link">View Lists</a></li>
                <li className="menu-item"><a href="#" className="item-link">Create List</a></li>
                <li className="menu-item"><a href="#" className="item-link">Login</a></li>
                <li className="menu-item"><a href="#" className="item-link">Logout</a></li>
            </ul>
        </nav>
    )
  }
}

export default NavBarHTML;
