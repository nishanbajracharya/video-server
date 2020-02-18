import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Logo from '../assets/logo.png';

const Nav = () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
      <style>
        {`body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }`}
      </style>
    </Head>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>
      {`
        nav {
          top: 0;
          width: 100%;
          position: fixed;
        }
        nav ul {
          margin: 0;
          padding: 0;
          height: 64px;
          display: flex;
          list-style: none;
          background: #ffffff;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo {
          width: 75px;
        }
      `}
    </style>
  </>
);

export default Nav;
