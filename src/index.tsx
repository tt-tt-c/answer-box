import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// import { Provider } from "react-redux";
// import {configureStore} from "./reducks/store";
import Route from "./components/Common/Route";

export const history = createBrowserHistory();

ReactDOM.render(
    <>
        <Router history={history}>
            <Route />
        </Router>
    </>,
    document.getElementById("root")
);
