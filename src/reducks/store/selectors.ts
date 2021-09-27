import {
    getIsCleared as getIsClearedOf1,
    getProblemNum as getProblemNumOf1,
    getIsSelectMode as getIsSelectModeOf1,
    getSelectedItem as getSelectedItemOf1,
    getStorageItems as getStorageItemsOf1,
    getInTransparentBoxItem as getInTransparentBoxItemOf1,
    getMysterySlide as getMysterySlideOf1,
    getBoxA as getBoxAOf1,
    getSmile as getSmileOf1,
} from "../stage1/selectors";
import {
    getIsCleared as getIsClearedOf2,
    getProblemNum as getProblemNumOf2,
    getIsSelectMode as getIsSelectModeOf2,
    getSelectedItem as getSelectedItemOf2,
    getStorageItems as getStorageItemsOf2,
    getInTransparentBoxItem as getInTransparentBoxItemOf2,
    getMysterySlide as getMysterySlideOf2,
    getBoxA as getBoxAOf2,
    getSmile as getSmileOf2,
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
    getBoxA as getBoxAOf3,
    getSmile as getSmileOf3,
    getSmallRoomItems as getSmallRoomItemsOf3,
} from "../stage3/selectors";
import {
    getIsCleared as getIsClearedOf4,
    getProblemNum as getProblemNumOf4,
    getProcessNum as getProcessNumOf4,
    getIsSelectMode as getIsSelectModeOf4,
    getSelectedItem as getSelectedItemOf4,
    getStorageItems as getStorageItemsOf4,
    getInTransparentBoxItem as getInTransparentBoxItemOf4,
    getMysterySlide as getMysterySlideOf4,
    getBoxA as getBoxAOf4,
    getSmile as getSmileOf4,
    getSmallRoomItems as getSmallRoomItemsOf4,
} from "../stage4/selectors";
import {
    getIsCleared as getIsClearedOf5,
    getProblemNum as getProblemNumOf5,
    getProcessNum as getProcessNumOf5,
    getIsSelectMode as getIsSelectModeOf5,
    getSelectedItem as getSelectedItemOf5,
    getStorageItems as getStorageItemsOf5,
    getInTransparentBoxItem as getInTransparentBoxItemOf5,
    getMysterySlide as getMysterySlideOf5,
    getBoxA as getBoxAOf5,
    getSmile as getSmileOf5,
    getSmallRoomItems as getSmallRoomItemsOf5,
} from "../stage5/selectors";
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
            return getIsClearedOf4(state.stage4);
        default:
            return getIsClearedOf5(state.stage5);
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
            return getProblemNumOf4(state.stage4);
        default:
            return getProblemNumOf5(state.stage5);
    }
};

export const getProcessNum = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "3":
            return getProcessNumOf3(state.stage3);
        case "4":
            return getProcessNumOf4(state.stage4);
        default:
            return getProcessNumOf5(state.stage5);
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
            return getIsSelectModeOf4(state.stage4);
        default:
            return getIsSelectModeOf5(state.stage5);
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
            return getSelectedItemOf4(state.stage4);
        default:
            return getSelectedItemOf5(state.stage5);
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
            return getStorageItemsOf4(state.stage4);
        default:
            return getStorageItemsOf5(state.stage5);
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
            return getInTransparentBoxItemOf4(state.stage4);
        default:
            return getInTransparentBoxItemOf5(state.stage5);
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
            return getMysterySlideOf4(state.stage4);
        default:
            return getMysterySlideOf5(state.stage5);
    }
};

export const getSmallRoomItems = (stageId: string, state: AppState, placeId:number) => {
    switch (stageId) {
        case "3":
            return getSmallRoomItemsOf3(state.stage3, placeId);
        case "4":
            return getSmallRoomItemsOf4(state.stage4, placeId);
        default:
            return getSmallRoomItemsOf5(state.stage5, placeId);
    }
}

export const getBoxA = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getBoxAOf1(state.stage1);
        case "2":
            return getBoxAOf2(state.stage2);
        case "3":
            return getBoxAOf3(state.stage3);
        case "4":
            return getBoxAOf4(state.stage4);
        default:
            return getBoxAOf5(state.stage5);
    }
};

export const getSmile = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getSmileOf1(state.stage1);
        case "2":
            return getSmileOf2(state.stage2);
        case "3":
            return getSmileOf3(state.stage3);
        case "4":
            return getSmileOf4(state.stage4);
        default:
            return getSmileOf5(state.stage5);
    }
};

