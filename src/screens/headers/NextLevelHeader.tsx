import React from 'react';

////////////////////////////// Local imports //////////////////////////////

// Components
import NonSecureHeader from './NonSecureHeader';

interface IHeaderProps {
  isSecure: boolean;
}

function Header({ isSecure }: IHeaderProps) {
  return <React.Fragment>{!isSecure && <NonSecureHeader />}</React.Fragment>;
}

export default Header;
