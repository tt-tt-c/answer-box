import actionCreatorFactory from "typescript-fsa";
import { ItemAlias, SelectedItemAlias, smallRoomItemsAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage5Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED_OF_5"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM_OF_5"),
    updateProcessNum: actionCreator<number>("UPDATE_PROCESS_NUM_OF_5"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM_OF_5"),
    updateSelectedItem: actionCreator<SelectedItemAlias>("UPDATE_SELECTED_ITEM_OF_5"),
    updateInTransparentBoxItem: actionCreator<SelectedItemAlias>("UPDATE_IN_TRANSPARENT_BOX_ITEM_OF_5"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE_OF_5"),
    updateStorageItems: actionCreator<ItemAlias[]>("UPDATE_STORAGE_ITEMS_OF_5"),
    updateSmallRoomItems: actionCreator<smallRoomItemsAlias>("UPDATE_SMALL_ROOM_ITEMS_OF_5"),
    updateMysterySlide: actionCreator<Blob | null>("UPDATE_MYSTERY_SLIDE_OF_5"),
    updateBoxA: actionCreator<SelectedItemAlias>("UPDATE_BOX_A_OF_5"),
    updateSmile: actionCreator<SelectedItemAlias>("UPDATE_SMILE_OF_5"),
    stageReset: actionCreator("STAGE5_RESET"),
};
