import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reportActions from "../actions/report-actions";
import * as articleActions from "../actions/article-actions";

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

// export function useSortedReportData() {
//   let data = null;
//   while (data === null) {
//     data = useReportData();
//   }
//   if (data) {
//     console.log(data);
//     let sortedList = [];
//     while (data.length > 0) {
//       let latest = getLatestWriting(data);
//       sortedList.push(latest);
//       reports = reports.filter((report) => report.id !== latest.id);
//     }
//     console.log(sortedList);
//     return sortedList;
//   }
// }

const sortList = (reports) => {
  let sortedList = [];
  while (reports.length > 0) {
    let latest = getLatestWriting(reports);
    sortedList.push(latest);
    reports = reports.filter((report) => report.id !== latest.id);
  }
  console.log(sortedList);
  return sortedList.reverse();
};

export function useArticleData() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const articleList = useSelector((state) => state.articleStore.articles);

  useEffect(() => {
    dispatch(articleActions.fetchArticles());
    setData(articleList);
  }, [dispatch, articleList, data]);
  return data;
}
