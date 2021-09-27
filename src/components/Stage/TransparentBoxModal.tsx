import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { icon_01, icon_07 } from "../../assets/img";
import { getBlobUrl } from "../../function/common";
import {
    getInTransparentBoxItem,
    getSelectedItem,
} from "../../reducks/store/selectors";
import { useSelector } from "../../reducks/store/store";
import { Overlay } from "../Common";
import { StageNum } from "../Common/Route";

type Props = {
    doFunc: Function;
    closeFunc: Function;
    isOverlayClickable?: boolean;
};

export type inTransParentBoxState = Props & { isShown: boolean };

const TransparentBoxModal: React.FC<Props> = ({
    doFunc,
    closeFunc,
    isOverlayClickable,
}) => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const selectedItem = getSelectedItem(stageId, selector);
    const inTransparentBoxItem = getInTransparentBoxItem(stageId, selector);
    return (
        <>
            <Overlay
                onClick={() => {
                    if (isOverlayClickable) closeFunc();
                }}
            />
            <ModalWrapper>
                <CloseButton
                    onClick={() => {
                        closeFunc();
                    }}
                />
                <h3>{`透明な容器`}</h3>
                <ItemsWrapper>
                    <SelectedItemContainer>
                        <p>Current</p>
                        <SelectedItemFigure>
                            <img
                                src={
                                    inTransparentBoxItem
                                        ? getBlobUrl(inTransparentBoxItem.img)
                                        : ""
                                }
                                alt={"inTransparentBoxItem"}
                            />
                            <figcaption>
                                {inTransparentBoxItem?.name}
                            </figcaption>
                        </SelectedItemFigure>
                    </SelectedItemContainer>
                    <IconImg src={icon_01} />
                    <SelectedItemContainer>
                        <p>Next</p>
                        <SelectedItemFigure>
                            <img
                                src={
                                    selectedItem
                                        ? getBlobUrl(selectedItem.img)
                                        : ""
                                }
                                alt={"selectedItem"}
                            />
                            <figcaption>{selectedItem?.name}</figcaption>
                        </SelectedItemFigure>
                    </SelectedItemContainer>
                </ItemsWrapper>

                <ButtonsWrapper>
                    <li>
                        <AnswerButton onClick={() => doFunc()}>
                            <span></span>
                            <span>
                                <span>入替</span>
                            </span>
                        </AnswerButton>
                    </li>
                </ButtonsWrapper>
            </ModalWrapper>
        </>
    );
};

const CloseButton = styled.input.attrs((props) => ({ type: "button" }))`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
    background: center/40px 40px url(${icon_07}) no-repeat;
    outline: none;
    transition: opacity 0.3s;
    :hover {
        opacity: 0.5;
    }
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    min-width: 400px;
    height: auto;
    background: #fff;
    padding: 70px 20px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px #ccc;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    z-index: 9991;
    h3 {
        position: absolute;
        color: #333;
        top: 15px;
        left: 20px;
        font-size: 40px;
        line-height: 1;
    }
`;

const ItemsWrapper = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const IconImg = styled.img`
    display: block;
    width: 30px;
    height: 30px;
    margin-top: 40px;
`;

const SelectedItemContainer = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    > p {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.6;
        position: relative;
        padding: 10px;
    }
`;
const SelectedItemFigure = styled.figure`
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #000;
    border: 3px solid #d9d9d9;
    padding: 10px 40px;
    background: #000;
    img {
        display: block;
        width: 60px;
        height: 60px;
    }
    figcaption {
        margin-top: 10px;
        text-align: center;
        width: 100%;
        color: #fff;
    }
`;

const ButtonsWrapper = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 20px;
    li {
        margin: 0 20px;
    }
`;

const BaseButton = styled.button`
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 4rem;
    outline: none;
    border: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
    position: relative;
    display: block;
    width: 200px;
    height: 130px;
    margin: 0 auto;
    background-color: inherit;
    > span:first-child {
        position: absolute;
        top: 38px;
        left: 0;
        width: 200px;
        height: 80px;
        border-radius: 100px / 40px;
        background: #d8e4ea;
        -webkit-box-shadow: 0 8px 0 #c4cacc;
        box-shadow: 0 8px 0 #c4cacc;
    }

    :hover > span:last-child {
        top: 5px;
        height: 55px;
    }

    :active > span:last-child {
        top: 20px;
        height: 40px;
    }

    > span:last-child {
        position: absolute;
        top: 0;
        left: 20px;
        width: 160px;
        height: 60px;
        margin-top: 30px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        border-radius: 0 0 50% 50%;
    }

    > span:last-child:before {
        position: absolute;
        top: -30px;
        left: 0;
        width: 160px;
        height: 60px;
        content: "";
        border-radius: 80px / 30px;
    }

    > span:last-child span {
        font-size: 38px;
        font-weight: bold;
        position: absolute;
        top: -24px;
        left: 0;
        width: 100%;
        -webkit-transform: scaleY(0.75);
        transform: scaleY(0.75);
        text-align: center;
    }
`;

const AnswerButton = styled(BaseButton)`
    > span:last-child {
        position: absolute;
        background: #d62d2d;
    }

    > span:last-child:before {
        background: #ed4c4c;
    }

    > span:last-child span {
        color: #fff;
    }
`;

const SendButton = styled(BaseButton)`
    > span:last-child {
        position: absolute;
        background: #006b3e;
    }

    > span:last-child:before {
        background: #009d5b;
    }

    > span:last-child span {
        color: #fff;
    }
`;

export default TransparentBoxModal;
