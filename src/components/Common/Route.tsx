import { Switch, Route as ReactRoute, Redirect } from "react-router-dom";
import { Layout } from ".";
import { TopPage, StagePage } from "../../templates";

export type StageNum = "1" | "2" | "3" | "4" | "5";

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
    mysterySlide: `mystery-slide`,
    answerBox: `answer-box`,
    roomA: `room-A`,
    roomB: `room-B`,
    roomO: `room-O`,
    roomX: `room-X`,
};

const Route: React.FC = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <ReactRoute exact path={path.top} component={TopPage} />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/:pathId(${path2.storage})`}
                        component={StagePage}
                    />                    
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/:pathId(${path2.mysterySlide})`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/:pathId(${path2.answerBox})`}
                        component={StagePage}
                    />                    
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/:pathId(${path2.roomA})`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([1-5])/:pathId(${path2.roomB})`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([3-5])/:pathId(${path2.roomO})`}
                        component={StagePage}
                    />
                    <ReactRoute
                        exact
                        path={`${path.stage}/:stageId([3-5])/${path2.roomX}`}
                        component={StagePage}
                    />
                    <ReactRoute
                        path={`${path.stage}/:stageId([1-5])`}
                        render={({ match }) => (
                            <Redirect
                                to={`${path.stage}/${match.params.stageId}/${path2.mysterySlide}`}
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
