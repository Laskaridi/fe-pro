import React from 'react';
import PropTypes from 'prop-types';

// HeaderNav.propTypes = {
    
// };

function HeaderNav(props) {
    if(props.login){
    return (
        <h3>Your account</h3>
    );
  }
  else{
    return(
        <>
        <button>
        Login
        </button></>
    )
  }
}

export default HeaderNav;