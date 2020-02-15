import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Nav from '../components/nav';

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

      <ul>
        {list.map(video => (
          <li key={video.id}>
            <Link href={`/video/${video.id}`}>
              <a>{video.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
