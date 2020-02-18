import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Card from '../components/card';

import * as videoService from '../services/video';

videoService.getList();

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
        <ul>
          {list.map(video => (
            <li key={video.id}>
              <Card id={video.id} title={video.title} url={video.file} />
            </li>
          ))}
        </ul>
        <style jsx>
        {
          `
            ul {
              padding: 0;
              margin: 8px;
              list-style: none;
            }
          `
        }
        </style>
      </>
    </div>
  );
};

export default Home;
