import { Stage5Alias } from "./types";

export const getIsCleared = (stage5: Stage5Alias) => stage5.isCleared;

export const getProblemNum = (stage5: Stage5Alias) => stage5.problemNum;

export const getProcessNum = (stage5: Stage5Alias) => stage5.processNum;

export const getSelectedItem = (stage5: Stage5Alias) => stage5.selectedItem;

export const getInTransparentBoxItem = (stage5: Stage5Alias) =>
    stage5.inTransparentBoxItem;
    
export const getBoxA = (stage5: Stage5Alias) => stage5.boxA;

export const getSmile = (stage5: Stage5Alias) => stage5.smile;

export const getIsSelectMode = (stage5: Stage5Alias) => stage5.isSelectMode;

export const getStorageItems = (stage5: Stage5Alias) => stage5.storageItems;

export const getSmallRoomItems = (stage5: Stage5Alias, placeId: number) => {
    if(stage5.smallRoomItems && stage5.smallRoomItems[placeId]) return stage5.smallRoomItems[placeId];
    else return null;
}

export const getMysterySlide = (stage5: Stage5Alias) => stage5.mysterySlide;
