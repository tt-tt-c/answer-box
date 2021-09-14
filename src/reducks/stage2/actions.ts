import actionCreatorFactory from "typescript-fsa";
import { selectedItemAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage2Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM"),
    updateSelectedItem: actionCreator<selectedItemAlias>("UPDATE_SELECTED_ITEM"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE"),
};
