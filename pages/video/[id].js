import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Nav from '../../components/nav';
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
      <div>
        <Nav back />
        <div className="video-container">
          {content.url && (
            <video controls>
              <source src={content.url} />
            </video>
          )}
          <div className="description">
            <p className="title">{content.title}</p>
            <p>{content.url}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .video-container {
            margin-top: 72px;
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

          @media only screen and (min-width: 991px) {
            .video-container {
              margin: 0 auto;
              margin-top: 96px;
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
