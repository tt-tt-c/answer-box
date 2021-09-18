import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchMysterySlide } from "../../reducks/store/operations";
import { getMysterySlide, getProblemNum } from "../../reducks/store/selectors";
import { useSelector } from "../../reducks/store/store";
import { StageNum } from "../Common/Route";

const SceneOfMysterySlide = () => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const problemNum = getProblemNum(stageId, selector);
    const mysterySlide = getMysterySlide(stageId, selector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMysterySlide(stageId));
    }, [stageId, problemNum, dispatch]);

    return (
        <>
            <Wrapper>
                {mysterySlide && (
                    <MysterySlide src={mysterySlide} alt="mystery-slide" />
                )}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    height: auto;
    width: 100%;
`;

const MysterySlide = styled.img`
    display: block;
    width: 800px;
`;

export default SceneOfMysterySlide;
