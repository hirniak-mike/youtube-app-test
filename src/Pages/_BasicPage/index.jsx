import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { MdArrowUpward } from "react-icons/md";

import { Header, Footer } from '../../Components/';

import s from './style.module.scss';

const BasicPage = ({ children }) => {
  return (
    <>
      <div className={s.basic_page}>
        <Header />
        {children}
        <Footer />
      </div>
      <ScrollToTop showUnder={500} style={{ zIndex: "999", right: "25px", bottom: "30px" }}>
        <MdArrowUpward className={s.scroll_icon} />
      </ScrollToTop>
    </>
  );
};

export default BasicPage;
