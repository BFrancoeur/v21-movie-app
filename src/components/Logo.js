import React from 'react';
import styled from 'styled-components';
import '../images/logo.png';

const LogoComponent = styled.div
`
  flex: 1 0 14%;
  padding: .2rem;
  border: var(--border-default); 
`;

const LogoImage = styled.img
`
  width: 100%;
  height: auto;
`;

class Logo extends React.Component {

  render() {
    return (
        <LogoComponent>
            <LogoImage src={require ('../images/logo.png')} alt="Logo" />
        </LogoComponent>
    )
  }
}

export default Logo;