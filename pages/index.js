import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Card from '../components/card';

import * as videoService from '../services/video';

function getColor() {
  const COLORS = ['#49c', '#6DC85E', '#EFB441', '#EE6464'];

  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    videoService.getList().then(list => setList(list));
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <>
        <ul className="list-container">
          {list.map(video => (
            <li key={video.id}>
              <Card
                id={video.id}
                title={video.title}
                url={video.file}
                color={getColor()}
              />
            </li>
          ))}
        </ul>
        <style jsx>
          {`
            ul {
              padding: 0;
              margin: 8px;
              list-style: none;
            }

            .list-container {
              padding-top: 72px;
            }

            @media only screen and (min-width: 991px) {
              ul {
                display: flex;
                margin: 0 auto;
                flex-wrap: wrap;
                max-width: 960px;
              }

              ul li {
                margin-bottom: 32px;
                width: calc(50% - 16px);
              }

              ul li:nth-child(2n) {
                margin-left: 32px;
              }

              .list-container {
                padding-top: 96px;
              }
            }
          `}
        </style>
      </>
    </div>
  );
};

export default Home;
