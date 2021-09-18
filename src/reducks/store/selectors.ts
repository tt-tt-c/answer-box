import {
    getIsCleared as getIsClearedOf1,
    getProblemNum as getProblemNumOf1,
    getIsSelectMode as getIsSelectModeOf1,
    getSelectedItem as getSelectedItemOf1,
    getStorageItems as getStorageItemsOf1,
    getInTransparentBoxItem as getInTransparentBoxItemOf1,
    getMysterySlide as getMysterySlideOf1,
} from "../stage1/selectors";
import {
    getIsCleared as getIsClearedOf2,
    getProblemNum as getProblemNumOf2,
    getIsSelectMode as getIsSelectModeOf2,
    getSelectedItem as getSelectedItemOf2,
    getStorageItems as getStorageItemsOf2,
    getInTransparentBoxItem as getInTransparentBoxItemOf2,
    getMysterySlide as getMysterySlideOf2,
} from "../stage2/selectors";
import {
    getIsCleared as getIsClearedOf3,
    getProblemNum as getProblemNumOf3,
    getProcessNum as getProcessNumOf3,
    getIsSelectMode as getIsSelectModeOf3,
    getSelectedItem as getSelectedItemOf3,
    getStorageItems as getStorageItemsOf3,
    getInTransparentBoxItem as getInTransparentBoxItemOf3,
    getMysterySlide as getMysterySlideOf3,
    getSmallRoomItems as getSmallRoomItemsOf3,
} from "../stage3/selectors";
import { AppState } from "./store";

export const getIsCleared = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getIsClearedOf1(state.stage1);
        case "2":
            return getIsClearedOf2(state.stage2);
        case "3":
            return getIsClearedOf3(state.stage3);
        case "4":
            return getIsClearedOf2(state.stage2);
        default:
            return getIsClearedOf2(state.stage2);
    }
};

export const getProblemNum = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getProblemNumOf1(state.stage1);
        case "2":
            return getProblemNumOf2(state.stage2);
        case "3":
            return getProblemNumOf3(state.stage3);
        case "4":
            return getProblemNumOf2(state.stage2);
        default:
            return getProblemNumOf2(state.stage2);
    }
};

export const getProcessNum = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "3":
            return getProcessNumOf3(state.stage3);
        case "4":
            return getProcessNumOf3(state.stage3);
        default:
            return getProcessNumOf3(state.stage3);
    }
};

export const getIsSelectMode = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getIsSelectModeOf1(state.stage1);
        case "2":
            return getIsSelectModeOf2(state.stage2);
        case "3":
            return getIsSelectModeOf3(state.stage3);
        case "4":
            return getIsSelectModeOf2(state.stage2);
        default:
            return getIsSelectModeOf2(state.stage2);
    }
};

export const getSelectedItem = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getSelectedItemOf1(state.stage1);
        case "2":
            return getSelectedItemOf2(state.stage2);
        case "3":
            return getSelectedItemOf3(state.stage3);
        case "4":
            return getSelectedItemOf2(state.stage2);
        default:
            return getSelectedItemOf2(state.stage2);
    }
};

export const getStorageItems = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getStorageItemsOf1(state.stage1);
        case "2":
            return getStorageItemsOf2(state.stage2);
        case "3":
            return getStorageItemsOf3(state.stage3);
        case "4":
            return getStorageItemsOf2(state.stage2);
        default:
            return getStorageItemsOf2(state.stage2);
    }
};

export const getInTransparentBoxItem = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getInTransparentBoxItemOf1(state.stage1);
        case "2":
            return getInTransparentBoxItemOf2(state.stage2);
        case "3":
            return getInTransparentBoxItemOf3(state.stage3);
        case "4":
            return getInTransparentBoxItemOf1(state.stage1);
        default:
            return getInTransparentBoxItemOf1(state.stage1);
    }
};

export const getMysterySlide = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getMysterySlideOf1(state.stage1);
        case "2":
            return getMysterySlideOf2(state.stage2);
        case "3":
            return getMysterySlideOf3(state.stage3);
        case "4":
            return getMysterySlideOf1(state.stage1);
        default:
            return getMysterySlideOf1(state.stage1);
    }
};

export const getSmallRoomItems = (stageId: string, state: AppState, placeId:number) => {
    switch (stageId) {
        case "3":
            return getSmallRoomItemsOf3(state.stage3, placeId);
        case "4":
            return getSmallRoomItemsOf3(state.stage3, placeId);
        default:
            return getSmallRoomItemsOf3(state.stage3, placeId);
    }
}
