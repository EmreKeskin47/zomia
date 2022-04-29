import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reportActions from "../actions/report-actions";
import * as articleActions from "../actions/article-actions";

export function useReportData() {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const reportList = useSelector((state) => state.reportStore.reports);

    useEffect(() => {
        dispatch(reportActions.fetchReports());
        console.log(reportList);
        setData(reportList);
    }, [dispatch, reportList]);
    return data;
}

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
