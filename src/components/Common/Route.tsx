import { Switch, Route as ReactRoute, Redirect } from "react-router-dom";
import { Layout } from ".";
import { TopPage, StagePage } from "../../templates";

export const path = {
    top: "/",
    stage: "/stage",
    stage1: "/stage/1",
    stage2: "/stage/2",
    stage3: "/stage/3",
    stage4: "/stage/4",
    stage5: "/stage/5",
};

export const path2 = {
    storage: "storage",
    smallRoom: `small-room`,
    mysterySlide: `mystery-slide`,
    answerBox: `answer-box`,
};

const Route: React.FC = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <ReactRoute exact path={path.top} component={TopPage} />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/${path2.storage}`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/${path2.smallRoom}`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/${path2.mysterySlide}`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/${path2.answerBox}`}
                        component={StagePage}
                    />
                    <ReactRoute
                        path={`${path.stage}/:stageId([1-5])`}
                        render={({ match }) => (
                            <Redirect
                                to={`${path.stage}/${match.params.stageId}/${path2.answerBox}`}
                            />
                        )}
                    />
                    <Redirect to={path.top} />
                </Switch>
            </Layout>
        </>
    );
};

export default Route;
