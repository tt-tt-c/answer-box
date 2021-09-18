import {
    getIsCleared as getIsClearedOf1,
    getProblemNum as getProblemNumOf1,
    getIsSelectMode as getIsSelectModeOf1,
    getSelectedItem as getSelectedItemOf1,
    getStorageItems as getStorageItemsOf1,
    getInTransparentBoxItem as getInTransparentBoxItemOf1,
} from "../stage1/selectors";
import {
    getIsCleared as getIsClearedOf2,
    getProblemNum as getProblemNumOf2,
    getSelectedItem as getSelectedItemOf2,
    getIsSelectMode as getIsSelectModeOf2,
} from "../stage2/selectors";
import { AppState } from "./store";

export const getIsCleared = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getIsClearedOf1(state.stage1);
        case "2":
            return getIsClearedOf2(state.stage2);
        case "3":
            return getIsClearedOf2(state.stage2);
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
            return getProblemNumOf2(state.stage2);
        case "4":
            return getProblemNumOf2(state.stage2);
        default:
            return getProblemNumOf2(state.stage2);
    }
};

export const getIsSelectMode = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getIsSelectModeOf1(state.stage1);
        case "2":
            return getIsSelectModeOf2(state.stage2);
        case "3":
            return getIsSelectModeOf2(state.stage2);
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
            return getSelectedItemOf2(state.stage2);
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
            return getStorageItemsOf1(state.stage1);
        case "3":
            return getStorageItemsOf1(state.stage1);
        case "4":
            return getStorageItemsOf1(state.stage1);
        default:
            return getStorageItemsOf1(state.stage1);
    }
};

export const getInTransparentBoxItem = (stageId: string, state: AppState) => {
    switch (stageId) {
        case "1":
            return getInTransparentBoxItemOf1(state.stage1);
        case "2":
            return getInTransparentBoxItemOf1(state.stage1);
        case "3":
            return getInTransparentBoxItemOf1(state.stage1);
        case "4":
            return getInTransparentBoxItemOf1(state.stage1);
        default:
            return getInTransparentBoxItemOf1(state.stage1);
    }
};
