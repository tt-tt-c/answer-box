import { Switch, Route, Redirect } from "react-router-dom";

export const Path = {
    top: "/",
};

const RouteContainer: React.FC = () => {
    const empComp = () => {return (<></>)}
    return(
        (
            <>
                <Switch>
                    <Route exact path={Path.top} component={empComp} />
                    <Redirect to={Path.top} />
                </Switch>
            </>
        )
    )
} 

export default RouteContainer;
