import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, history } from "./reducks/store/store";
import Route from "./components/Common/Route";
import { Loading } from "./components/Common";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router history={history}>
                    <Loading></Loading>
                    <Route />
                </Router>
            </PersistGate>
        </Provider>
    </>,
    document.getElementById("root")
);

export type AppDispatch = typeof store.dispatch;
