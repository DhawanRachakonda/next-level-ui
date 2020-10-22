import React from 'react';

////////////////////////////// Local imports //////////////////////////////

// Components
import NonSecureHeader from './NonSecureHeader';
import SecureHeader from './SecureHeader';

interface IHeaderProps {
  isSecure: boolean;
  handleDrawerOpen?: ReturnType<typeof Function>;
  displayMenu?: boolean;
}

function Header({
  isSecure,
  handleDrawerOpen = () => ({}),
  displayMenu = false,
}: IHeaderProps) {
  return (
    <React.Fragment>
      {!isSecure ? (
        <NonSecureHeader />
      ) : (
        <SecureHeader
          displayMenu={displayMenu}
          handleDrawerOpen={handleDrawerOpen}
        />
      )}
    </React.Fragment>
  );
}

export default Header;
