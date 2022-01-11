import React, { createContext, useState } from "react";
import useSound from "use-sound";
import soundselect from "../mp3/selectsound.wav";

const SettingContext = createContext({
  french: false,
  setFrench: () => {},
  blue: false,
  setBlue: () => {},
  select: () => {},
});
export default SettingContext;

export const SettingContextProvider = ({ children }) => {
  const [french, setFrench] = useState(false);
  const [blue, setBlue] = useState(false);
  const [select] = useSound(soundselect);
  return (
    <SettingContext.Provider
      value={{ french, setFrench, blue, setBlue, select }}
    >
      {children}
    </SettingContext.Provider>
  );
};
