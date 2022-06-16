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

const getBiggest = (items) => {
  let biggest = 0;
  items.map((item) => {
    if (item > biggest) {
      biggest = item;
    }
  });
  return biggest;
};

const getIndexes = (items, item) => {
  let indexes = [];
  for (let i = 0; i < items.length; i++) {
    if (item === items[i]) {
      indexes.push(i);
    }
  }
  return indexes;
};

const getLatestWriting = (writingList) => {
  let years = [];
  let months = [];
  let days = [];
  let index = 0;
  let theYear = 0;
  let theMonth = 0;
  let theDay = 0;
  writingList.map((writing) => {
    let sepArr = writing.date.split(" ");
    years.push(Number(sepArr[2]));
    months.push(monthList[sepArr[0].toLowerCase()]);
    days.push(Number(sepArr[1]));
  });
  //get the biggest year
  const biggestYear = getBiggest(years);
  //get the indexes with the biggest year
  const yearIndexes = getIndexes(years, biggestYear);
  //if there is just one year than return
  if (yearIndexes.length === 1) {
    return writingList[yearIndexes[0]];
  }
  theYear = biggestYear;
  //if there is more than a yeaer then it means we have the necessary indexes to compare months
  let localMonths = [];
  for (let i = 0; i < months.length; i++) {
    if (yearIndexes.includes(i)) {
      localMonths.push(months[i]);
    }
  }
  const biggestMonth = getBiggest(localMonths);
  const monthIndexes = getIndexes(localMonths, biggestMonth);
  theMonth = biggestMonth;
  //if there is more than a month then it means we have the necessary indexes to compare days
  let localDays = [];
  for (let i = 0; i < days.length; i++) {
    if (yearIndexes.includes(i)) {
      localDays.push(days[i]);
    }
  }
  const biggestDay = getBiggest(localDays);
  const dayIndexes = getIndexes(localDays, biggestDay)[0];
  theDay = biggestDay;
  //find the necessary index
  for (let i = 0; i < writingList.length; i++) {
    if (years[i] === theYear && months[i] === theMonth && days[i] === theDay) {
      index = i;
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
  let localReports = reports;
  let sortedList = [];
  while (localReports.length > 0) {
    let latest = getLatestWriting(localReports);
    sortedList.push(latest);
    localReports = localReports.filter((report) => report.id !== latest.id);
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
  console.log("writing data is: ", writingData);
  return writingData;
}

//kucukten buyuge analysis sonra buyukten kucuge reports
