import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reportActions from "../actions/report-actions";
import * as articleActions from "../actions/article-actions";
import * as carouselActions from "../actions/carousel-actions";

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

const getLatestWriting = (writingList) => {
  let years = [];
  let months = [];
  let days = [];
  let index = 0;
  writingList.map((writing) => {
    let sepArr = writing.date.split(" ");
    years.push(Number(sepArr[2]));
    months.push(Number(monthList[sepArr[0].toLowerCase()]));
    days.push(Number(sepArr[1]));
  });

  const biggestYear = getBiggest(years);
  let localMonths = [];
  for (let i = 0; i < years.length; i++) {
    if (years[i] === biggestYear) {
      localMonths.push(months[i]);
    }
  }
  const biggestMonth = getBiggest(localMonths);
  let localDays = [];
  for (let i = 0; i < years.length; i++) {
    if (years[i] === biggestYear && months[i] === biggestMonth) {
      localDays.push(days[i]);
    }
  }
  const biggestDay = getBiggest(localDays);
  for (let i = 0; i < years.length; i++) {
    if (
      years[i] === biggestYear &&
      months[i] === biggestMonth &&
      days[i] === biggestDay
    ) {
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
    setData(sortList(reportList).reverse());
  }, [dispatch, reportList]);
  return data;
}

export function useReverseReportData() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const reportList = useSelector((state) => state.reportStore.reports);
  useEffect(() => {
    dispatch(reportActions.fetchReports());
    setData(sortList(reportList).reverse());
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
    // }, [dispatch, articleList, data]);
  }, []);
  return data;
}

export function useCarouselData() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const postList = useSelector((state) => state.carouselStore);
  console.log("postlist", postList);
  useEffect(() => {
    dispatch(carouselActions.fetchCarouselPosts());
    dispatch(carouselActions.fetchCarouselOrder());
    setData(postList);
  }, []);
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
