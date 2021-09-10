import { reducerWithInitialState } from "typescript-fsa-reducers";
import { userActions } from "./actions";
import { initialState } from "../store/initialState";

export const userReducer = reducerWithInitialState(initialState.user)
    .case(userActions.releaseSelectedThing, (state) => {
        return {
            ...state,
            selectedThing: null,
        };
    })
    .case(userActions.updateSelectedThing, (state, selectedThing) => {
        return {
            ...state,
            selectedThing: {...selectedThing},
        };
    })
    .case(userActions.updateSeleteMode, (state, isSelectMode) => {
        return {
            ...state,
            isSelectMode: isSelectMode,
        }
    })
    .default(() => {
        return { ...initialState.user };
    });
