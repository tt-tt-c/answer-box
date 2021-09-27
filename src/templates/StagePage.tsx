import { ClearModal, GameLayout, RightOrWrongModal } from "../components/Stage";
import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { getProblemNum, getProcessNum } from "../reducks/store/selectors";
import { useSelector } from "../reducks/store/store";
import { fetchStorageItems } from "../reducks/store/operations";

type Props = RouteComponentProps<{
    stageId: string;
    pathId: string;
}>;

const StagePage: React.FC<Props> = (props) => {
    const stageId = props.match.params.stageId;
    const pathId = props.match.params.pathId;
    const selector = useSelector();

    const [availableBox, setAvailableBox] = useState(allAvailable);
    const [availableTransparentBox, setAvailableTransparentBox] = useState(false);
    const problemNum = getProblemNum(stageId, selector);
    const processNum = getProcessNum(stageId, selector);

    const dispatch = useDispatch();

    useEffect(() => {
        let nextAvailableBox = {...allAvailable};
        let nextAvailableTransparentBox = false;
        switch (stageId) {
            case "1":
                nextAvailableBox.o = false;
                nextAvailableBox.x = false;
                break;
            case "2":
                nextAvailableBox.a = false;
                nextAvailableBox.b = false;
                break;
            case "3":
                nextAvailableBox.o = false;
                nextAvailableBox.x = false;
                break;
            case "5":
                nextAvailableTransparentBox = true;
        }
        setAvailableBox({...nextAvailableBox});
        setAvailableTransparentBox(nextAvailableTransparentBox);
        dispatch(fetchStorageItems(stageId));
    }, [dispatch,stageId, problemNum, processNum]);

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
                        availableTransparentBox ={availableTransparentBox}
                    ></SceneOfAnswerBox>
                )}
                {pathId === path2.mysterySlide && (
                    <SceneOfMysterySlide></SceneOfMysterySlide>
                )}
                {pathId === path2.storage && <SceneOfStorage></SceneOfStorage>}
                {pathId === path2.roomA && <SceneOfSmallRoom placeId={1} />}
                {pathId === path2.roomB && <SceneOfSmallRoom placeId={2} />}
                {pathId === path2.roomO && <SceneOfSmallRoom placeId={3} />}
                {pathId === path2.roomX && <SceneOfSmallRoom placeId={4} />}
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
