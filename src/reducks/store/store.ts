import { createStore, applyMiddleware, combineReducers } from "redux";
import {
    connectRouter,
    routerMiddleware,
    RouterState,
} from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { LoadingAlias } from "../loading/types";
import { loadingReducer } from "../loading/reducers";
import { Stage1Alias } from "../stage1/types";
import { stage1Reducer } from "../stage1/reducers";
import { useSelector as defaultUseSelector } from "react-redux";
import { stage2Reducer } from "../stage2/reducers";
import { Stage2Alias } from "../stage2/types";
import { ModalsAlias } from "../modals/types";
import { modalsReducer } from "../modals/reducers";
import { Stage3Alias } from "../stage3/types";
import { stage3Reducer } from "../stage3/reducers";

export type AppState = {
    loading: LoadingAlias;
    modals: ModalsAlias;
    stage1: Stage1Alias;
    stage2: Stage2Alias;
    stage3: Stage3Alias;
    router: RouterState;
};

const persistConfig = {
    key: "root", // Storageに保存されるキー名を指定する
    storage, // 保存先としてlocalStorageがここで設定される
    whitelist: ["stage1", "stage2", "stage3", "stage4", "stage5", "router"], // Stateは`todos`のみStorageに保存する
    // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

export const useSelector = () => {
    const selector = defaultUseSelector((state: AppState) => state);
    return selector;
};

const logger = createLogger();

export const history = createBrowserHistory();

export function configureStore() {
    const middlewares = [
        routerMiddleware(history),
        logger,
        thunk,
        require("redux-immutable-state-invariant").default(),
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(
        persistReducer(
            persistConfig,
            combineReducers({
                loading: loadingReducer,
                modals: modalsReducer,
                stage1: persistReducer(
                    {
                        key: "stage1",
                        storage,
                        blacklist: [
                            "selectedItem",
                            "storageItems",
                            "inTransparentBoxItem",
                            "mysterySlide",
                        ],
                    },
                    stage1Reducer
                ),
                stage2: persistReducer(
                    {
                        key: "stage2",
                        storage,
                        blacklist: [
                            "selectedItem",
                            "storageItems",
                            "inTransparentBoxItem",
                            "mysterySlide",
                        ],
                    },
                    stage2Reducer
                ),
                stage3: persistReducer(
                    {
                        key: "stage3",
                        storage,
                        blacklist: [
                            "selectedItem",
                            "storageItems",
                            "inTransparentBoxItem",
                            "mysterySlide",
                            "smallRoomItems",
                        ],
                    },
                    stage3Reducer
                ),
                router: connectRouter(history),
            })
        ),
        middlewareEnhancer
    );
    return store;
}
