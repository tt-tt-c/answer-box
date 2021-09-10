import { AppState } from "./store";

export const initialState: Omit<AppState, "router"> = {
    loading: {
        isShowned: false,
    },
    stage1: {
        isCleared: false,
        problemNum: 1,
    },
    stage2: {
        isCleared: false,
        problemNum: 1,
    },
    user: {
        selectedThing: null,
        isSelectMode: false,
    },
};
