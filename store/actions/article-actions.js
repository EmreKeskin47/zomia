export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";

export const fetchArticles = () => {
    return async (dispatch) => {
        try {
            let articles = [];
            dispatch({
                type: FETCH_ARTICLES,
                payload: articles,
            });
        } catch (err) {
            console.log(err);
        }
    };
};
