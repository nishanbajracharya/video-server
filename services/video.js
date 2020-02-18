import axios from 'axios';

const VIDEO_URL = process.env.SERVE_URL;

export function getList() {
  return axios(VIDEO_URL).then(response => {
    const files = response.data.files;

    return files.map((file, id) => ({
      title: file.name,
      id: 'video-' + id,
      file: file.base,
      url: VIDEO_URL + '/' + file.base,
    }));
  });
}
