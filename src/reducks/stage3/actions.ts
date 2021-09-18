import actionCreatorFactory from "typescript-fsa";
import { ItemAlias, SelectedItemAlias, smallRoomItemsAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage3Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM"),
    updateProcessNum: actionCreator<number>("UPDATE_PROCESS_NUM"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM"),
    updateSelectedItem: actionCreator<SelectedItemAlias>("UPDATE_SELECTED_ITEM"),
    updateInTransparentBoxItem: actionCreator<SelectedItemAlias>("UPDATE_IN_TRANSPARENT_BOX_ITEM"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE"),
    updateStorageItems: actionCreator<ItemAlias[]>("UPDATE_STORAGE_ITEMS"),
    updateSmallRoomItems: actionCreator<smallRoomItemsAlias>("UPDATE_SMALL_ROOM_ITEMS"),
    updateMysterySlide: actionCreator<string | null>("UPDATE_MYSTERY_SLIDE"),
};
