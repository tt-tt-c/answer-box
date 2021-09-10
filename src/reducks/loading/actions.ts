import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const loadingActions = {
    showLoading: actionCreator("SHOW_LOADING"),
    hideLoading: actionCreator("HIDE_LOADING"),
};
