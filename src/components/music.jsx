import ReactPlayer from "react-player";
import playlist from "../music";
import { useMemo } from "react";

const Music = ({ musicPlayer }) => {
  const musicComponent = useMemo(() => musicPlayer, [musicPlayer]);
  return (
    <div className="music-component">
      {musicComponent && (
        <ReactPlayer
          url={playlist[Math.round(Math.random() * 5)].src}
          controls
          width="0"
          height="0"
          playing={true}
          volume={0.3}
        />
      )}
    </div>
  );
};

export default Music;
