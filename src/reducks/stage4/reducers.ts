import { reducerWithInitialState } from "typescript-fsa-reducers";
import { stage4Actions } from "./actions";
import { initialState } from "../store/initialState";

export const stage4Reducer = reducerWithInitialState(initialState.stage4)
    .case(stage4Actions.updateIsCleared, (state, isCleared) => {
        return {
            ...state,
            isCleared: isCleared,
        };
    })
    .case(stage4Actions.updateProblemNum, (state, problemNum) => {
        return {
            ...state,
            problemNum: problemNum,
        };
    })
    .case(stage4Actions.updateProcessNum, (state, processNum) => {
        return {
            ...state,
            processNum: processNum,
        };
    })
    .case(stage4Actions.releaseSelectedItem, (state) => {
        return {
            ...state,
            selectedItem: null,
        };
    })
    .case(stage4Actions.updateInTransparentBoxItem, (state, selectedItem) => {
        return {
            ...state,
            inTransparentBoxItem: {...selectedItem},
        };
    })
    .case(stage4Actions.updateSelectedItem, (state, selectedItem) => {
        return {
            ...state,
            selectedItem: {...selectedItem},
        };
    })
    .case(stage4Actions.updateSeleteMode, (state, isSelectMode) => {
        return {
            ...state,
            isSelectMode: isSelectMode,
        }
    })
    .case(stage4Actions.updateStorageItems, (state, storageItems) => {
        return {
            ...state,
            storageItems: [...storageItems],
        }
    })
    .case(stage4Actions.updateSmallRoomItems, (state, smallRoomItems) => {
        return {
            ...state,
            smallRoomItems: {...smallRoomItems}
        }
    })
    .case(stage4Actions.updateMysterySlide, (state, mysterySlide) => {
        return {
            ...state,
            mysterySlide: mysterySlide,
        }
    })
    .case(stage4Actions.updateBoxA, (state, boxA) => {
        return {
            ...state,
            boxA: {...boxA},
        };
    })
    .case(stage4Actions.updateSmile, (state, smile) => {
        return {
            ...state,
            smile: {...smile},
        };
    })
    .default((state) => {
        return { ...state };
    });
