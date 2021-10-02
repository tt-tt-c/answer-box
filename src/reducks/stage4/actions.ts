import actionCreatorFactory from "typescript-fsa";
import { ItemAlias, SelectedItemAlias, smallRoomItemsAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const stage4Actions = {
    updateIsCleared: actionCreator<boolean>("UPDATE_IS_CLEARED_OF_4"),
    updateProblemNum: actionCreator<number>("UPDATE_PROBLEM_NUM_OF_4"),
    updateProcessNum: actionCreator<number>("UPDATE_PROCESS_NUM_OF_4"),
    releaseSelectedItem: actionCreator("RELEASE_SELECTED_ITEM_OF_4"),
    updateSelectedItem: actionCreator<SelectedItemAlias>("UPDATE_SELECTED_ITEM_OF_4"),
    updateInTransparentBoxItem: actionCreator<SelectedItemAlias>("UPDATE_IN_TRANSPARENT_BOX_ITEM_OF_4"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE_OF_4"),
    updateStorageItems: actionCreator<ItemAlias[]>("UPDATE_STORAGE_ITEMS_OF_4"),
    updateSmallRoomItems: actionCreator<smallRoomItemsAlias>("UPDATE_SMALL_ROOM_ITEMS_OF_4"),
    updateMysterySlide: actionCreator<Blob | null>("UPDATE_MYSTERY_SLIDE_OF_4"),
    updateBoxA: actionCreator<SelectedItemAlias>("UPDATE_BOX_A_OF_4"),
    updateSmile: actionCreator<SelectedItemAlias>("UPDATE_SMILE_OF_4"),
    stageReset: actionCreator("STAGE4_RESET"),
};
