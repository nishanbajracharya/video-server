import React from 'react';
import videojs from 'video.js';

export default class VideoPlayer extends React.Component {
  constructor() {
    super();

    this.videoNode = React.createRef();
  }
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(
      this.videoNode.current,
      this.props
    );
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video ref={this.videoNode} className="video-js" />
      </div>
    );
  }
}
