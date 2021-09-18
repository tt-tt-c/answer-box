import { reducerWithInitialState } from "typescript-fsa-reducers";
import { stage1Actions } from "./actions";
import { initialState } from "../store/initialState";

export const stage1Reducer = reducerWithInitialState(initialState.stage1)
    .case(stage1Actions.updateIsCleared, (state, isCleared) => {
        return {
            ...state,
            isCleared: isCleared,
        };
    })
    .case(stage1Actions.updateProblemNum, (state, problemNum) => {
        return {
            ...state,
            problemNum: problemNum,
        };
    })
    .case(stage1Actions.releaseSelectedItem, (state) => {
        return {
            ...state,
            selectedItem: null,
        };
    })
    .case(stage1Actions.updateInTransparentBoxItem, (state, selectedItem) => {
        return {
            ...state,
            inTransparentBoxItem: {...selectedItem},
        };
    })
    .case(stage1Actions.updateSelectedItem, (state, selectedItem) => {
        return {
            ...state,
            selectedItem: {...selectedItem},
        };
    })
    .case(stage1Actions.updateSeleteMode, (state, isSelectMode) => {
        return {
            ...state,
            isSelectMode: isSelectMode,
        }
    })
    .case(stage1Actions.updateStorageItems, (state, storageItems) => {
        return {
            ...state,
            storageItems: [...storageItems],
        }
    })
    .default((state) => {
        return { ...state };
    });
