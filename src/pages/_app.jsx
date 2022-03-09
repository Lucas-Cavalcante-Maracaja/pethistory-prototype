
import 'react-tabs/style/react-tabs.css';
import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/Header/HeaderComponent'
import HeaderMobileComponent from '../components/Header/HeaderMobileComponent'
import FooterComponent from '../components/Footer/FooterComponent'
import FooterMobileComponent from '../components/Footer/FooterMobileComponent'
import store from '../redux/store';
import { Provider } from 'react-redux';
import { isMobile } from 'react-device-detect';



function MyApp({ Component, pageProps }) {



  return (
    <>
      <Provider store={store}>
        <HeaderMobileComponent />  <HeaderComponent />
        <Component {...pageProps} />

        {isMobile ? <FooterMobileComponent /> : ""}

      </Provider>

    </>



  )
}

export default MyApp
