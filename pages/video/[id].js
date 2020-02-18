import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Nav from '../../components/nav';
import VideoPlayer from '../../components/video';
import * as videoService from '../../services/video';

const Video = () => {
  const router = useRouter();

  const [list, setList] = useState([]);

  useEffect(() => {
    videoService.getList().then(list => setList(list));
  }, []);

  const content = list.find(data => data.id === router.query.id) || {};

  return (
    <>
      <Head>
        <link
          href="https://vjs.zencdn.net/7.6.6/video-js.css"
          rel="stylesheet"
        />
        <link href="/video.css" rel="stylesheet" />
      </Head>
      <div>
        <Nav back />
        <div className="video-container">
          {content.url && (
            <VideoPlayer
              autoplay
              controls
              sources={[
                {
                  src: content.url,
                  type: 'video/mp4',
                },
              ]}
            />
          )}
          <div className="description">
            <p className="title">{content.title}</p>
            <p>{content.file}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .video-container {
            padding-top: 72px;
          }

          .title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 12px;
          }

          video {
            outline: none;
            width: 100%;
          }

          .description {
            padding: 8px;
          }

          :global(.theme-dark) .description {
            color: #d7d7d7;
          }

          @media only screen and (min-width: 991px) {
            .video-container {
              margin: 0 auto;
              padding-top: 96px;
              max-width: 960px;
            }

            .description {
              padding: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Video;
