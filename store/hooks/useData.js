import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reportActions from "../actions/report-actions";
import * as articleActions from "../actions/article-actions";

const monthList = {
  january: "1",
  february: "2",
  march: "3",
  april: "4",
  may: "5",
  june: "6",
  july: "7",
  august: "8",
  september: "9",
  october: "10",
  november: "11",
  december: "12",
};

const getLatestWriting = (writingList) => {
  let years = [];
  let months = [];
  let days = [];
  let index = 0;
  writingList.map((writing) => {
    let sepArr = writing.date.split(" ");
    years.push(Number(sepArr[2]));
    months.push(sepArr[0].toLowerCase());
    days.push(Number(sepArr[1]));
  });
  years.push(9999);
  for (let i = 0; i < years.length - 1; i++) {
    if (years[i] > years[i + 1]) {
      if (years[i] > years[index]) {
        index = i;
      }
    } else if (years[i] === years[i + 1]) {
      if (
        monthList[months[i].toLowerCase()] >
        monthList[months[i + 1].toLowerCase()]
      ) {
        index = i;
      } else if (
        monthList[months[i].toLowerCase()] ===
        monthList[months[i + 1].toLowerCase()]
      ) {
        if (days[i] > days[i + 1]) {
          index = i;
        }
      }
    }
  }
  return writingList[index];
};

export function useReportData() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const reportList = useSelector((state) => state.reportStore.reports);
  useEffect(() => {
    dispatch(reportActions.fetchReports());
    setData(sortList(reportList));
  }, [dispatch, reportList]);
  return data;
}

const sortList = (reports) => {
  let sortedList = [];
  while (reports.length > 0) {
    let latest = getLatestWriting(reports);
    sortedList.push(latest);
    reports = reports.filter((report) => report.id !== latest.id);
  }
  return sortedList.reverse();
};

export function useArticleData() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const articleList = useSelector((state) => state.articleStore.articles);

  useEffect(() => {
    dispatch(articleActions.fetchArticles());
    setData(sortList(articleList).reverse());
  }, [dispatch, articleList, data]);
  return data;
}

export function useWritingData() {
  const dispatch = useDispatch();
  // const [reportData, setReportData] = useState(null);
  const reportList = useSelector((state) => state.reportStore.reports);
  // const [articleData, setArticleData] = useState(null);
  const articleList = useSelector((state) => state.articleStore.articles);
  const [writingData, setWritingData] = useState(null);
  useEffect(() => {
    dispatch(reportActions.fetchReports());
    const reportData = sortList(reportList);
    dispatch(articleActions.fetchArticles());
    const articleData = sortList(articleList);
    setWritingData(sortList(articleData.concat(reportData)));
  }, [dispatch, reportList, articleList]);
  return writingData;
}

//kucukten buyuge analysis sonra buyukten kucuge reports
