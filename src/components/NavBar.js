import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav 
` 
width: 100%;
padding: 2.2rem 4rem;
border: 1px solid #555;
`;

const NavMenu = styled.ul
`
width: 100%;
display: flex;
justify-content: space-between;
list-style-type: none;
padding: 0;
`;

const MenuItem = styled.li
`
display: inline-block;
text-align: center;
font-size: .875rem;
background-color: #5af;
box-sizing: border-box;
`;

const ItemLink = styled.a
`
width: 100%;
height: auto;
font-size: .875rem;
padding: .5rem .8rem;
background-color: #eee;
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
