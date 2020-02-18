import React, { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Logo from '../assets/logo.png';

import { ThemeContext } from '../contexts/theme';

const Nav = props => {
  const theme = useContext(ThemeContext);

  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <style>
        {`body {
          background: #fafafa;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        
        body .theme-dark {
          height: 100%;
          transition: .25s;
          min-height: 100vh;
          position: relative;
          background: #212121;
        }

        `}
      </style>
    </Head>
    <nav>
      <div className="nav-container">
        {props.back && (
          <Link href="/">
            <a className="back-icon">
              <i className="material-icons">arrow_back</i>
            </a>
          </Link>
        )}
        <Link href="/">
          <a>
            <img className="logo" src={Logo} alt="logo" />
          </a>
        </Link>
        <i className="material-icons theme-toggle" onClick={theme.toggle}>{theme.value === 'dark' ? 'toggle_on' : 'toggle_off'}</i>
      </div>
    </nav>
    <style jsx>
      {`
        nav {
          top: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 64px;
          position: fixed;
          list-style: none;
          transition: .25s;
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo {
          width: 75px;
        }

        .back-icon {
          left: 8px;
          color: #ee6464;
          transition: .25s;
          position: absolute;
        }

        .nav-container {
          height: 100%;
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
        }

        .theme-toggle {
          right: 8px;
          font-size: 32px;
          cursor: pointer;
          position: absolute;
        }

        :global(.theme-dark) nav {
          background: #424242;
        }

        :global(.theme-dark) .theme-toggle {
          color: #ee6464;
        }

        @media only screen and (min-width: 991px) {
          .back-icon {
            left: 0;
          }
          .theme-toggle {
            right: 0;
          }
          .nav-container {
            margin: 0 auto;
            max-width: 960px;
          }
        }
      `}
    </style>
  </>
};

export default Nav;
