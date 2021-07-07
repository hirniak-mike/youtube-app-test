import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { MdArrowUpward } from "react-icons/md";

import { Header, Footer } from '../../Components/';

import { SBasicPage, ScrollToTopWrapper } from './BasicPage.style'

const BasicPage: React.FC = ({ children }) => {
  return (
    <>
      <SBasicPage>
        <Header />
        {children}
        <Footer />
      </SBasicPage>
      <ScrollToTopWrapper>
        <ScrollToTop showUnder={500} style={{ zIndex: "999", right: "25px", bottom: "30px" }}>
          <MdArrowUpward className='scroll_icon' />
        </ScrollToTop>
      </ScrollToTopWrapper>
    </>
  );
};

export default BasicPage;
