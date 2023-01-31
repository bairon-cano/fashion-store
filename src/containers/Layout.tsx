import React, { useContext } from 'react';
import Header from 'components/Header';
import AppContext from 'context/AppContext';

const Layout = ({ children }: any) => {
  const { state }: any = useContext(AppContext);

  return (
    <div className="Layout">
      <Header />
      <div className={state.listIsOpen || state.orderIsOpen && 'changeBg'}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
