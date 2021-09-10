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
    .default(() => {
        return { ...initialState.stage1 };
    });
