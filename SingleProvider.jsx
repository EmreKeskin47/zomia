import React, { useState, useEffect } from "react";
import singleContext from "./SingleContext";
import { useReportData, useArticleData } from "./store/hooks/useData";

const SingleProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const reportList = useReportData();
  const articleList = useArticleData();

  return (
    <singleContext.Provider
      value={{
        darkMode: isDarkMode,
        toggleDarkMode: () => {
          if (isDarkMode) {
            setIsDarkMode(false);
          } else {
            setIsDarkMode(true);
          }
        },
        reportList: reportList,
        articleList: articleList,
      }}
    >
      {props.children}
    </singleContext.Provider>
  );
};

export default SingleProvider;
