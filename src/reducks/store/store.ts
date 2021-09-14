import { createStore, applyMiddleware, combineReducers } from "redux";
import {
    connectRouter,
    routerMiddleware,
    RouterState,
} from "connected-react-router";
import thunk from 'redux-thunk'
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { LoadingAlias } from "../loading/types";
import { loadingReducer } from "../loading/reducers";
import { Stage1Alias } from "../stage1/types";
import { stage1Reducer } from "../stage1/reducers";
import { useSelector as defaultUseSelector } from "react-redux";
import { stage2Reducer } from "../stage2/reducers";
import { Stage2Alias } from "../stage2/types";

export type AppState = {
    loading: LoadingAlias;
    stage1: Stage1Alias;
    stage2: Stage2Alias;
    router: RouterState;
};

export const useSelector = () => {
    const selector = defaultUseSelector((state: AppState) => state);
    return selector;
};

const logger = createLogger();

export const history = createBrowserHistory();

export function configureStore() {
    const middlewares = [routerMiddleware(history), logger, thunk,require('redux-immutable-state-invariant').default()];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        combineReducers({
            loading: loadingReducer,
            stage1: stage1Reducer,
            stage2: stage2Reducer,            
            router: connectRouter(history),
        }),
        middlewareEnhancer
    );
    return store;
}

