import { reducerWithInitialState } from "typescript-fsa-reducers";
import { modalsActions } from "./actions";
import { initialState } from "../store/initialState";

export const modalsReducer = reducerWithInitialState(initialState.modals)
    .case(modalsActions.showStageClearModal, (state) => {
        return {
            ...state,
            stageClearModal: {
                isShown: true,
            },
        };
    })
    .case(modalsActions.hideStageClearModal, (state) => {
        return {
            ...state,
            stageClearModal: {
                isShown: false,
            },
        };
    })
    .case(modalsActions.showRightOrWrongModal, (state, isCorrect: boolean) => {
        return {
            ...state,
            rightOrWrongModal: {
                isCorrect: isCorrect,
                isShown: true,
            }
        };
    })
    .case(modalsActions.hideRightOrWrongModal, (state) => {
        return {
            ...state,
            rightOrWrongModal: {
                isCorrect: false,
                isShown: false,
            }
        };
    })
    .default((state) => {
        return { ...state };
    });
