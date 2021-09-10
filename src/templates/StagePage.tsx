import {GameLayout} from "../components/Stage";
import React from "react";
import { Subtitle } from "../components/Common";
import { RouteComponentProps } from 'react-router-dom';
import { path2 } from "../components/Common/Route";
import SceneOfAnswerBox from "../components/Stage/SceneOfAnswerBox";
import SceneOfMysterySlide from "../components/Stage/SceneOfMysterySlide";
import SceneOfStorage from "../components/Stage/SceneOfStorage";
import SceneOfSmallRoom from "../components/Stage/SceneOfSmallRoom";

type Props = RouteComponentProps<{
    stageId: string;
    pathId: string;
   }>;

const StagePage: React.FC<Props> = (props) => {
    const stageId = props.match.params.stageId;
    const pathId = props.match.params.pathId;
    return (
        <>
            <GameLayout>
                <Subtitle>{`STAGE ${stageId}`}</Subtitle>

                {pathId === path2.answerBox && (
                    <SceneOfAnswerBox ></SceneOfAnswerBox>
                )}
                {pathId === path2.mysterySlide && (
                    <SceneOfMysterySlide ></SceneOfMysterySlide>
                )}
                {pathId === path2.storage && (
                    <SceneOfStorage ></SceneOfStorage>
                )}
                {(pathId !== path2.answerBox && pathId !== path2.mysterySlide &&  pathId !== path2.storage )&&  (
                    <SceneOfSmallRoom ></SceneOfSmallRoom>
                )}

            </GameLayout>
        </>
    );
};

export default StagePage;
