import React, { createContext, useState } from "react";

const MusicContext = createContext({
  musicPlayer: false,
  setMusicPlayer: () => {},
});
export default MusicContext;

export const MusicContextProvider = ({ children }) => {
  const [musicPlayer, setMusicPlayer] = useState(false);
  return (
    <MusicContext.Provider value={{ musicPlayer, setMusicPlayer }}>
      {children}
    </MusicContext.Provider>
  );
};
