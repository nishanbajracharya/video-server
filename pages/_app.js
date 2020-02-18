import React, { useState, useEffect } from 'react';
// import App from 'next/app'

import { ThemeProvider } from '../contexts/theme';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  function setGlobalTheme(value) {
    setTheme(value);

    localStorage.setItem('theme', value);
  }

  useEffect(() => {
    const themeValue = localStorage.getItem('theme');

    setTheme(themeValue);
  }, []);

  return (
    <ThemeProvider
      value={{
        value: theme,
        update: value => setGlobalTheme(value),
        toggle: () => setGlobalTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      <div className={`theme-${theme}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
