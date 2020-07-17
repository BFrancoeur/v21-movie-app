import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav 
` 
width: 100%;
padding: 2rem;
border: 1px solid #555;
`;

const NavMenu = styled.ul
`
width: 100%;
display: flex;
justify-content: space-evenly;
list-style-type: none;
padding: 1rem;
border: 1px solid #555;
`;

const MenuItem = styled.li
`
flex: 1 0 25%;
margin-right: 3%;
font-size: .875rem;
background-color: transparent;
`;

const ItemLink = styled.a
`
width: auto;
height: auto;
font-size: .875rem;
padding: 1rem;
background-color: #fff;
border: 1px solid #555;
transition: all .2s;

&:active {
  background-color: #ccc;
}

&:hover {
  background-color: #ccc;
}
`;

// navbar along top of page

class NavBar extends React.Component {

  render() {
    return (
      <Navigation>
        <NavMenu>
          <MenuItem>
            <ItemLink>View Lists</ItemLink>
          </MenuItem>
          <MenuItem>
            <ItemLink>Create List</ItemLink>
          </MenuItem>
          <MenuItem>
            <ItemLink>Login/Logout</ItemLink>
          </MenuItem>
        </NavMenu>
      </Navigation>
    )
  }
}

export default NavBar;
