import React, { useState } from "react";
import singleContext from "./SingleContext";

const SingleProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <singleContext.Provider
      value={{
        darkMode: isDarkMode,
        toogleDarkMode: () => {
          if (isDarkMode) {
            setIsDarkMode(false);
          } else {
            setIsDarkMode(true);
          }
        },
      }}
    >
      {props.children}
    </singleContext.Provider>
  );
};

export default SingleProvider;
