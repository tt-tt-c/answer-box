import { Stage3Alias } from "./types";

export const getIsCleared = (stage3: Stage3Alias) => stage3.isCleared;

export const getProblemNum = (stage3: Stage3Alias) => stage3.problemNum;

export const getProcessNum = (stage3: Stage3Alias) => stage3.processNum;

export const getSelectedItem = (stage3: Stage3Alias) => stage3.selectedItem;

export const getInTransparentBoxItem = (stage3: Stage3Alias) =>
    stage3.inTransparentBoxItem;

export const getBoxA = (stage3: Stage3Alias) => stage3.boxA;

export const getSmile = (stage3: Stage3Alias) => stage3.smile;

export const getIsSelectMode = (stage3: Stage3Alias) => stage3.isSelectMode;

export const getStorageItems = (stage3: Stage3Alias) => stage3.storageItems;

export const getSmallRoomItems = (stage3: Stage3Alias, placeId: number) => {
    if (stage3.smallRoomItems && stage3.smallRoomItems[placeId])
        return stage3.smallRoomItems[placeId];
    else return null;
};

export const getMysterySlide = (stage3: Stage3Alias) => stage3.mysterySlide;
