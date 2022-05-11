import React, { useState, useEffect } from "react";
import singleContext from "./SingleContext";
import { useReportData, useArticleData } from "./store/hooks/useData";

const SingleProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const reportList = useReportData();
  const articleList = useArticleData();

  return (
    <singleContext.Provider
      value={{
        darkMode: isDarkMode,
        auth: adminAuth,
        toggleDarkMode: () => {
          if (isDarkMode) {
            setIsDarkMode(false);
          } else {
            setIsDarkMode(true);
          }
        },
        signInAdmin: () => {
          setAdminAuth(true);
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
