import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const stage2Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM"),
};
