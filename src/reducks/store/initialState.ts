import { AppState } from "./store";

export const initialState: Omit<AppState, "router"> = {
    loading: {
        isShowned: false,
    },
    modals: {
        stageClearModal: {
            isShowned: false,
        },
        rightOrWrongModal: {
            isCorrect: false,
            isShowned: false,
        }
    },
    stage1: {
        isCleared: false,
        problemNum: 1,
        isSelectMode: false,
        selectedItem: null,
        storageItems: [],
        inTransparentBoxItem: null,
        mysterySlide: null,
    },
    stage2: {
        isCleared: false,
        problemNum: 1,
        isSelectMode: false,
        selectedItem: null,
        storageItems: [],
        inTransparentBoxItem: null,
        mysterySlide: null,
    },
    stage3: {
        isCleared: false,
        problemNum: 1,
        processNum: 1,
        isSelectMode: false,
        selectedItem: null,
        storageItems: [],
        inTransparentBoxItem: null,
        mysterySlide: null,
        smallRoomItems: null,
    },
};
