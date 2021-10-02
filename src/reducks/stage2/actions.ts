import actionCreatorFactory from "typescript-fsa";
import { ItemAlias, SelectedItemAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage2Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED_OF_2"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM_OF_2"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM_OF_2"),
    updateSelectedItem: actionCreator<SelectedItemAlias>("UPDATE_SELECTED_ITEM_OF_2"),
    updateInTransparentBoxItem: actionCreator<SelectedItemAlias>("UPDATE_IN_TRANSPARENT_BOX_ITEM_OF_2"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE_OF_2"),
    updateStorageItems: actionCreator<ItemAlias[]>("UPDATE_STORAGE_ITEMS_OF_2"),
    updateMysterySlide: actionCreator<Blob | null>("UPDATE_MYSTERY_SLIDE_OF_2"),
    updateBoxA: actionCreator<SelectedItemAlias>("UPDATE_BOX_A_OF_2"),
    updateSmile: actionCreator<SelectedItemAlias>("UPDATE_SMILE_OF_2"),
    stage2Reset: actionCreator("STAGE2_RESET"),
};
