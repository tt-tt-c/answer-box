import React, { useState } from "react";
import styled from "styled-components";
import { ConfirmState } from "../Common/ConfirmModal";
import { Button01, ConfirmModal, Toggle } from "../Common";
import { useSelector } from "../../reducks/store/store";
import {
    getIsSelectMode,
    getSelectedItem,
} from "../../reducks/store/selectors";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { stageActions } from "../../reducks/store/actions";
import { StageNum } from "../Common/Route";
import { loadingActions } from "../../reducks/loading/actions";
import { getBlobUrl } from "../../function/common";

const Footer = () => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const isSelectMode = getIsSelectMode(stageId, selector);
    const selectedItem = getSelectedItem(stageId, selector);
    const dispatch = useDispatch();
    const initConfirmState = {
        isShown: false,
        confirmText: "",
        doFunc: () => {},
        closeFunc: () => {},
    };
    const [confirmModalState, setConfirmModalState] =
        useState<ConfirmState>(initConfirmState);

    return (
        <>
            <Wrapper>
                <footer>
                    <MenuWrapper>
                        <li>
                            <MenuTitle>選択中のモノ</MenuTitle>
                            <SelectedThingWrapper>
                                {selectedItem && (
                                    <SelectedThingImg
                                        key={`selectedItem${selectedItem.id}`}
                                        src={getBlobUrl(selectedItem.img)}
                                        alt={selectedItem.name}
                                    />
                                )}
                            </SelectedThingWrapper>
                        </li>
                        <li>
                            <MenuTitle>Releaseボタン</MenuTitle>
                            <Container>
                                <Button01
                                    buttonColor={"#FF0000"}
                                    boxShadowColor={"#FFFFFF"}
                                    onClick={() => {
                                        setConfirmModalState({
                                            isShown: true,
                                            confirmText:
                                                "選択中の物をリリースしますか？",
                                            doFunc: () => {
                                                dispatch(loadingActions.showLoading())
                                                setConfirmModalState(
                                                    initConfirmState
                                                );                                        
                                                dispatch(
                                                    stageActions[
                                                        stageId
                                                    ].releaseSelectedItem()
                                                );
                                                dispatch(stageActions[
                                                    stageId
                                                ].updateSeleteMode(false))
                                                dispatch(loadingActions.hideLoading())
                                            },
                                            closeFunc: () => {
                                                setConfirmModalState(
                                                    initConfirmState
                                                );
                                            },
                                            yesText: "リリースする",
                                            noText: "キャンセル",
                                            isOverlayClickable: true,
                                        });
                                    }}
                                    isDisabled={selectedItem === null}
                                >
                                    RELEASE
                                </Button01>
                            </Container>
                        </li>
                        <li>
                            <MenuTitle>選択モード切り替え</MenuTitle>
                            <Container>
                                <Toggle
                                    onChange={(isChecked: boolean) => {
                                        dispatch(
                                            stageActions[
                                                stageId
                                            ].updateSeleteMode(isChecked)
                                        );
                                    }}
                                    isChecked={isSelectMode}
                                    isDisabled={selectedItem !== null}
                                ></Toggle>
                            </Container>
                        </li>
                    </MenuWrapper>
                </footer>
            </Wrapper>
            {confirmModalState.isShown && (
                <ConfirmModal {...confirmModalState} />
            )}
        </>
    );
};
const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0%;
    box-sizing: border-box;
    width: 100%;
    height: 180px;
    padding: 0 calc(50% - 400px);
    background-color: #000;
    box-shadow: 0 -1px 5px 0 #ccc;
    footer {
        box-sizing: border-box;
        width: 100%;
        border-color: #fff;
        border-style: solid;
        border-width: 0 5px;
        height: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
`;
const SelectedThingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 120px;
    border-radius: 5px;
    border: 5px solid #ccc;
`;

const MenuWrapper = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 10px 0 0;
    height: 100%;
    box-sizing: border-box;
    li {
        border-style: solid;
        border-color: #fff;
        border-width: 0 1px;
        height: 100%;
        width: 30%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
`;

const MenuTitle = styled.p`
    border: 1px dashed #ccc;
    padding: 5px 10px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;
`;

const SelectedThingImg = styled.img`
    display: block;
    width: 90%;
    height: 90%;
`;

export default Footer;
