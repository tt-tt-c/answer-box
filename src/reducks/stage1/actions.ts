import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const stage1Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM"),
};
