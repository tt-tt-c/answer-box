import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, history } from "./reducks/store/store";
import Route from "./components/Common/Route";
import { Loading } from "./components/Common";

const store = configureStore()

ReactDOM.render(
    <>
        <Provider store={store}>
            <Router history={history}>
                <Loading></Loading>
                <Route />
            </Router>
        </Provider>
    </>,
    document.getElementById("root")
);
