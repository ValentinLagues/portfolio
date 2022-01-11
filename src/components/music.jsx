import ReactPlayer from "react-player";
import playlist from "../music";
import MusicContext from "../context/MusicContext";
import { useContext } from "react";

const Music = () => {
  const { musicPlayer } = useContext(MusicContext);
  return (
    <div className="music-component">
      {musicPlayer && (
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
