import { Container } from '@material-ui/core';
import React, { ReactNode } from 'react';
import './BoxLayout.scss';

interface BoxLayoutProps {
  children: ReactNode;
}

function BoxLayout({ children }: BoxLayoutProps) {
  return (
    <Container>
      <div className="box-layout">{children}</div>
    </Container>
  );
}

export default BoxLayout;
