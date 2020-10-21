import React from 'react';

import './Layout.scss';

// Footer
import Divider from '@material-ui/core/Divider';
import Header from 'screens/headers/NextLevelHeader';

////////////////////////////// Local imports //////////////////////////////

// Components
import NextLevelContainer from 'containers/layouts/AppLayout';
import Footer from 'screens/footer';

interface IAppLayoutProps {
  children: React.ReactNode;
  isSecure: boolean;
}

function NextLevelAppLayout({ children, isSecure = false }: IAppLayoutProps) {
  console.log('isSecure?', isSecure);
  return (
    <NextLevelContainer>
      <Header isSecure={isSecure} />
      {children}
      <Divider />
      <Footer />
    </NextLevelContainer>
  );
}

export default NextLevelAppLayout;
