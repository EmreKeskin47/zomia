import {
    FETCH_ARTICLES,
    CREATE_ARTICLE,
    DELETE_ARTICLE,
    UPDATE_ARTICLE,
} from "../actions/article-actions";

const initialState = {
    articles: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES:
            state.articles = action.payload;
            return state;
        case DELETE_ARTICLE:
            state.articles.filter((item) => item.id === action.payload);
            return state;
        case CREATE_ARTICLE:
            state.articles.push(action.payload);
        case UPDATE_ARTICLE:
            const index = state.articles.findIndex(
                (article) => article.id === action.id
            );
            state.articles[index] = action.payload;
            return state;
    }
    return state;
};
