import React from 'react';
import '../../images/logo.png';
import '../../css/logo.css';


// navbar along top of page

class LogoHTML extends React.Component {

  render() {
    return (
        <div className="logo">
            <img className='logo-image' src={require ('../../images/logo.png')} alt="Logo" />
        </div>
    )
  }
}

export default LogoHTML;