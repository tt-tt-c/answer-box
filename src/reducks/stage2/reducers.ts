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
    .default(() => {
        return { ...initialState.stage1 };
    });
