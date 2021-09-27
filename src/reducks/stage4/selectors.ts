import { Stage4Alias } from "./types";

export const getIsCleared = (stage4: Stage4Alias) => stage4.isCleared;

export const getProblemNum = (stage4: Stage4Alias) => stage4.problemNum;

export const getProcessNum = (stage4: Stage4Alias) => stage4.processNum;

export const getSelectedItem = (stage4: Stage4Alias) => stage4.selectedItem;

export const getInTransparentBoxItem = (stage4: Stage4Alias) =>
    stage4.inTransparentBoxItem;

export const getBoxA = (stage4: Stage4Alias) => stage4.boxA;

export const getSmile = (stage4: Stage4Alias) => stage4.smile;

export const getIsSelectMode = (stage4: Stage4Alias) => stage4.isSelectMode;

export const getStorageItems = (stage4: Stage4Alias) => stage4.storageItems;

export const getSmallRoomItems = (stage4: Stage4Alias, placeId: number) => {
    if(stage4.smallRoomItems && stage4.smallRoomItems[placeId]) return stage4.smallRoomItems[placeId];
    else return null;
}

export const getMysterySlide = (stage4: Stage4Alias) => stage4.mysterySlide;
