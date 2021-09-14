import { AppState } from "./store";

export const initialState: Omit<AppState, "router"> = {
    loading: {
        isShowned: false,
    },
    stage1: {
        isCleared: false,
        problemNum: 0,
        isSelectMode: false,
        selectedItem: null,
        storageItems: [],
    },
    stage2: {
        isCleared: false,
        problemNum: 1,
        isSelectMode: false,
        selectedItem: null,
    },
};
