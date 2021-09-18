import { reducerWithInitialState } from "typescript-fsa-reducers";
import { stage3Actions } from "./actions";
import { initialState } from "../store/initialState";

export const stage3Reducer = reducerWithInitialState(initialState.stage3)
    .case(stage3Actions.updateIsCleared, (state, isCleared) => {
        return {
            ...state,
            isCleared: isCleared,
        };
    })
    .case(stage3Actions.updateProblemNum, (state, problemNum) => {
        return {
            ...state,
            problemNum: problemNum,
        };
    })
    .case(stage3Actions.updateProcessNum, (state, processNum) => {
        return {
            ...state,
            processNum: processNum,
        };
    })
    .case(stage3Actions.releaseSelectedItem, (state) => {
        return {
            ...state,
            selectedItem: null,
        };
    })
    .case(stage3Actions.updateInTransparentBoxItem, (state, selectedItem) => {
        return {
            ...state,
            inTransparentBoxItem: {...selectedItem},
        };
    })
    .case(stage3Actions.updateSelectedItem, (state, selectedItem) => {
        return {
            ...state,
            selectedItem: {...selectedItem},
        };
    })
    .case(stage3Actions.updateSeleteMode, (state, isSelectMode) => {
        return {
            ...state,
            isSelectMode: isSelectMode,
        }
    })
    .case(stage3Actions.updateStorageItems, (state, storageItems) => {
        return {
            ...state,
            storageItems: [...storageItems],
        }
    })
    .case(stage3Actions.updateSmallRoomItems, (state, smallRoomItems) => {
        return {
            ...state,
            smallRoomItems: {...smallRoomItems}
        }
    })
    .case(stage3Actions.updateMysterySlide, (state, mysterySlide) => {
        return {
            ...state,
            mysterySlide: mysterySlide,
        }
    })
    .default((state) => {
        return { ...state };
    });
