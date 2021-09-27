import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loadingActions } from "./actions";
import { initialState } from "../store/initialState";

export const loadingReducer = reducerWithInitialState(initialState.loading)
    .case(loadingActions.showLoading, (state) => {
        return {
            ...state,
            isShown: true,
        };
    })
    .case(loadingActions.hideLoading, (state) => {
        return {
            ...state,
            isShown: false,
        };
    })
    .default((state) => {
        return { ...state };
    });
