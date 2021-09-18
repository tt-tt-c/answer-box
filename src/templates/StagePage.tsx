import { ClearModal, GameLayout, RightOrWrongModal } from "../components/Stage";
import React from "react";
import { Subtitle } from "../components/Common";
import { RouteComponentProps } from "react-router-dom";
import { path2 } from "../components/Common/Route";
import SceneOfAnswerBox, {
    allAvailable,
} from "../components/Stage/SceneOfAnswerBox";
import SceneOfMysterySlide from "../components/Stage/SceneOfMysterySlide";
import SceneOfStorage from "../components/Stage/SceneOfStorage";
import SceneOfSmallRoom from "../components/Stage/SceneOfSmallRoom";
import styled from "styled-components";

type Props = RouteComponentProps<{
    stageId: string;
    pathId: string;
}>;

const StagePage: React.FC<Props> = (props) => {
    const stageId = props.match.params.stageId;
    const pathId = props.match.params.pathId;
    const availableBox = allAvailable;

    switch (stageId) {
        case "1":
            availableBox.o = false;
            availableBox.x = false;
            break;
        case "2":
            availableBox.a = false;
            availableBox.b = false;
            break;
    }
    return (
        <>
            <GameLayout>
                <TitleWrapper>
                    <Subtitle>{`STAGE ${stageId}`}</Subtitle>
                    <PathText>{`～ ${pathId.toUpperCase()} ～`}</PathText>
                </TitleWrapper>
                {pathId === path2.answerBox && (
                    <SceneOfAnswerBox
                        availableBox={availableBox}
                    ></SceneOfAnswerBox>
                )}
                {pathId === path2.mysterySlide && (
                    <SceneOfMysterySlide></SceneOfMysterySlide>
                )}
                {pathId === path2.storage && <SceneOfStorage></SceneOfStorage>}
                {pathId === path2.roomA && <SceneOfSmallRoom placeId={1}/>}
                {pathId === path2.roomB && <SceneOfSmallRoom placeId={2}/>}
                {pathId === path2.roomO && <SceneOfSmallRoom placeId={3}/>}
                {pathId === path2.roomX && <SceneOfSmallRoom placeId={4}/>}
                <ClearModal />
                <RightOrWrongModal />
            </GameLayout>
        </>
    );
};

const TitleWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
`;
const PathText = styled.p`
    font-size: 20px;
    margin: 5px 0 0 20px;
`;

export default StagePage;
