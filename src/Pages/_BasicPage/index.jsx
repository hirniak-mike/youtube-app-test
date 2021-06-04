import React from 'react';

import { Header, Footer } from '../../Components/';

import s from './style.module.scss';

const BasicPage = ({ children }) => {
  return (
    <div className={s.basic_page}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BasicPage;
