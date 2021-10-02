import actionCreatorFactory from "typescript-fsa";
import { ItemAlias, SelectedItemAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage1Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED_OF_1"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM_OF_1"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM_OF_1"),
    updateSelectedItem: actionCreator<SelectedItemAlias>("UPDATE_SELECTED_ITEM_OF_1"),
    updateInTransparentBoxItem: actionCreator<SelectedItemAlias>("UPDATE_IN_TRANSPARENT_BOX_ITEM_OF_1"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE_OF_1"),
    updateStorageItems: actionCreator<ItemAlias[]>("UPDATE_STORAGE_ITEMS_OF_1"),
    updateMysterySlide: actionCreator<Blob | null>("UPDATE_MYSTERY_SLIDE_OF_1"),
    updateBoxA: actionCreator<SelectedItemAlias>("UPDATE_BOX_A_OF_1"),
    updateSmile: actionCreator<SelectedItemAlias>("UPDATE_SMILE_OF_1"),
    stageReset: actionCreator("STAGE1_RESET"),
};
