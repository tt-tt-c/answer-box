import { reducerWithInitialState } from "typescript-fsa-reducers";
import { stage2Actions } from "./actions";
import { initialState } from "../store/initialState";

export const stage2Reducer = reducerWithInitialState(initialState.stage2)
    .case(stage2Actions.updateIsCleared, (state, isCleared) => {
        return {
            ...state,
            isCleared: isCleared,
        };
    })
    .case(stage2Actions.updateProblemNum, (state, problemNum) => {
        return {
            ...state,
            problemNum: problemNum,
        };
    })
    .case(stage2Actions.releaseSelectedItem, (state) => {
        return {
            ...state,
            selectedItem: null,
        };
    })
    .case(stage2Actions.updateInTransparentBoxItem, (state, selectedItem) => {
        return {
            ...state,
            inTransparentBoxItem: {...selectedItem},
        };
    })
    .case(stage2Actions.updateSelectedItem, (state, selectedItem) => {
        return {
            ...state,
            selectedItem: {...selectedItem},
        };
    })
    .case(stage2Actions.updateSeleteMode, (state, isSelectMode) => {
        return {
            ...state,
            isSelectMode: isSelectMode,
        }
    })
    .case(stage2Actions.updateStorageItems, (state, storageItems) => {
        return {
            ...state,
            storageItems: [...storageItems],
        }
    })
    .case(stage2Actions.updateMysterySlide, (state, mysterySlide) => {
        return {
            ...state,
            mysterySlide: mysterySlide,
        }
    })
    .case(stage2Actions.updateBoxA, (state, boxA) => {
        return {
            ...state,
            boxA: {...boxA},
        };
    })
    .case(stage2Actions.updateSmile, (state, smile) => {
        return {
            ...state,
            smile: {...smile},
        };
    })
    .case(stage2Actions.stage2Reset, (state) => {        
        return { 
            ...state,
            ...initialState.stage2,
        }
    })
    .default((state) => {
        return { ...state };
    });
