import { Switch, Route as ReactRoute, Redirect } from "react-router-dom";
import { Layout } from "./components/Common";
import { TopPage } from "./templates";

export const Path = {
    top: "/",
    stage1: "/stage/1/",
};

const Route: React.FC = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <ReactRoute exact path={Path.top} component={TopPage} />
                    <Redirect to={Path.top} />
                </Switch>
            </Layout>
        </>
    );
};

export default Route;
