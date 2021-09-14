import actionCreatorFactory from "typescript-fsa";
import { ItemAlias, SelectedItemAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage1Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM"),
    updateSelectedItem: actionCreator<SelectedItemAlias>("UPDATE_SELECTED_ITEM"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE"),
    updateStorageItems: actionCreator<ItemAlias[]>("UPDATE_STORAGE_ITEMS"),
};
