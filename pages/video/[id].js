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
    <div>
      <Nav />
      <p>{content.title || 'Video'}</p>
      {content.url && (
        <video width="1280" controls>
          <source src={content.url} />
        </video>
      )}
    </div>
  );
};

export default Video;
