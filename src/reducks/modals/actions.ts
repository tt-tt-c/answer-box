import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const modalsActions = {    
    showStageClearModal: actionCreator("SHOW_STAGE_CLEAR_MODAL"),
    hideStageClearModal: actionCreator("HIDE_STAGE_CLEAR_MODAL"),
    showRightOrWrongModal: actionCreator<boolean>("SHOW_RIGHT_OR_WRONG_MODAL"),
    hideRightOrWrongModal: actionCreator("HIDE_RIGHT_OR_WRONG_MODAL"),
};
