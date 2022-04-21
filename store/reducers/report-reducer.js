import {
    FETCH_REPORTS,
    CREATE_REPORT,
    DELETE_REPORT,
    UPDATE_REPORT,
} from "../actions/report-actions";

const initialState = {
    reports: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPORTS:
            state.reports = action.payload;
            return state;
        case DELETE_REPORT:
            state.reports.filter((item) => item.id === action.payload);
            return state;
    }
    return state;
};
