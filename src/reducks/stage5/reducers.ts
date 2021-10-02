import { reducerWithInitialState } from "typescript-fsa-reducers";
import { stage5Actions } from "./actions";
import { initialState } from "../store/initialState";

export const stage5Reducer = reducerWithInitialState(initialState.stage5)
    .case(stage5Actions.updateIsCleared, (state, isCleared) => {
        return {
            ...state,
            isCleared: isCleared,
        };
    })
    .case(stage5Actions.updateProblemNum, (state, problemNum) => {
        return {
            ...state,
            problemNum: problemNum,
        };
    })
    .case(stage5Actions.updateProcessNum, (state, processNum) => {
        return {
            ...state,
            processNum: processNum,
        };
    })
    .case(stage5Actions.releaseSelectedItem, (state) => {
        return {
            ...state,
            selectedItem: null,
        };
    })
    .case(stage5Actions.updateInTransparentBoxItem, (state, selectedItem) => {
        return {
            ...state,
            inTransparentBoxItem: {...selectedItem},
        };
    })
    .case(stage5Actions.updateSelectedItem, (state, selectedItem) => {
        return {
            ...state,
            selectedItem: {...selectedItem},
        };
    })
    .case(stage5Actions.updateSeleteMode, (state, isSelectMode) => {
        return {
            ...state,
            isSelectMode: isSelectMode,
        }
    })
    .case(stage5Actions.updateStorageItems, (state, storageItems) => {
        return {
            ...state,
            storageItems: [...storageItems],
        }
    })
    .case(stage5Actions.updateSmallRoomItems, (state, smallRoomItems) => {
        return {
            ...state,
            smallRoomItems: {...smallRoomItems}
        }
    })
    .case(stage5Actions.updateMysterySlide, (state, mysterySlide) => {
        return {
            ...state,
            mysterySlide: mysterySlide,
        }
    })
    .case(stage5Actions.updateBoxA, (state, boxA) => {
        return {
            ...state,
            boxA: {...boxA},
        };
    })
    .case(stage5Actions.updateSmile, (state, smile) => {
        return {
            ...state,
            smile: {...smile},
        };
    })
    .case(stage5Actions.stageReset, (state) => {        
        return { 
            ...state,
            ...initialState.stage2,
        }
    })
    .default((state) => {
        return { ...state };
    });
