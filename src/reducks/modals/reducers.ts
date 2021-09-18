import { reducerWithInitialState } from "typescript-fsa-reducers";
import { modalsActions } from "./actions";
import { initialState } from "../store/initialState";

export const modalsReducer = reducerWithInitialState(initialState.modals)
    .case(modalsActions.showStageClearModal, (state) => {
        return {
            ...state,
            stageClearModal: {
                isShowned: true,
            },
        };
    })
    .case(modalsActions.hideStageClearModal, (state) => {
        return {
            ...state,
            stageClearModal: {
                isShowned: false,
            },
        };
    })
    .case(modalsActions.showRightOrWrongModal, (state, isCorrect: boolean) => {
        return {
            ...state,
            rightOrWrongModal: {
                isCorrect: isCorrect,
                isShowned: true,
            }
        };
    })
    .case(modalsActions.hideRightOrWrongModal, (state) => {
        return {
            ...state,
            rightOrWrongModal: {
                isCorrect: false,
                isShowned: false,
            }
        };
    })
    .default((state) => {
        return { ...state };
    });
