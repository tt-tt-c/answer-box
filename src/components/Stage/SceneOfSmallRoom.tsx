import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "../../reducks/store/store";
import styled from "styled-components";
import { bg_05 } from "../../assets/img";
import {
    getInTransparentBoxItem,
    getIsSelectMode,
    getProblemNum,
    getProcessNum,
    getSelectedItem,
    getSmallRoomItems,
} from "../../reducks/store/selectors";
import { StageNum } from "../Common/Route";
import { useDispatch } from "react-redux";
import { fetchSmallRoomItems } from "../../reducks/store/operations";
import { stageActions } from "../../reducks/store/actions";
import { loadingActions } from "../../reducks/loading/actions";

type Props = {
    placeId: 1 | 2 | 3 | 4;
};

const SceneOfSmallRoom: React.FC<Props> = ({ placeId }) => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const problemNum = getProblemNum(stageId, selector);
    const processNum = getProcessNum(stageId, selector);
    const smallRoomItems = getSmallRoomItems(stageId, selector, placeId);
    const isSelectMode = getIsSelectMode(stageId, selector);
    const selectedItem = getSelectedItem(stageId, selector);
    const inTransparentBoxItem = getInTransparentBoxItem(stageId, selector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!smallRoomItems || smallRoomItems.length === 0)
            dispatch(fetchSmallRoomItems(stageId, placeId));
    }, [dispatch, problemNum, processNum, smallRoomItems, stageId, placeId]);

    const itemElms = [];
    if (smallRoomItems && smallRoomItems.length > 0) {
        for (let i = 0; i < smallRoomItems.length; i += 3) {
            const pickItems = smallRoomItems.slice(
                i,
                i + 3 < smallRoomItems.length ? i + 3 : smallRoomItems.length
            );
            itemElms.push(
                <DeskWrapper key={`smallRoomWrapper${i}`}>
                    {pickItems.map((item, index: number) => {
                        if (
                            (!selectedItem || item.id !== selectedItem.id) &&
                            (!inTransparentBoxItem ||
                                item.id !== inTransparentBoxItem.id)
                        ) {
                            return (
                                <Item
                                    key={`smallRoomItem${item.id}${i + index}Place${placeId}`}
                                    src={item.img}
                                    width={itemSizeParams[item.size]}
                                    height={itemSizeParams[item.size]}
                                    itemNum={index % 3}
                                    isSelectMode={isSelectMode}
                                    onClick={() => {
                                        if (isSelectMode) {
                                            dispatch(
                                                loadingActions.showLoading()
                                            );
                                            const storageItem =
                                                smallRoomItems[i + index];
                                            dispatch(
                                                stageActions[
                                                    stageId
                                                ].updateSelectedItem({
                                                    id: storageItem.id,
                                                    name: storageItem.name,
                                                    img: storageItem.img,
                                                })
                                            );
                                            dispatch(
                                                stageActions[
                                                    stageId
                                                ].updateSeleteMode(false)
                                            );
                                            dispatch(
                                                loadingActions.hideLoading()
                                            );
                                        }
                                    }}
                                />
                            );
                        } else if (
                            selectedItem &&
                            item.id === selectedItem.id
                        ) {
                            return (
                                <SelectedItem
                                    key={`smallRoomItem${item.id}${i + index}Place${placeId}`}
                                    width={itemSizeParams[item.size]}
                                    height={itemSizeParams[item.size]}
                                    itemNum={index % 5}
                                />
                            );
                        } else {
                            return (
                                <InBoxItem
                                    key={`smallRoomItem${item.id}${i + index}Place${placeId}`}
                                    width={itemSizeParams[item.size]}
                                    height={itemSizeParams[item.size]}
                                    itemNum={index % 5}
                                />
                            );
                        }
                    })}
                </DeskWrapper>
            );
        }
    }

    return <Wrapper>{itemElms}</Wrapper>;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    height: auto;
    width: 100%;
`;

const deskWidth = 1000;
const deskHeight = (200 / 400) * deskWidth;

const DeskWrapper = styled.div`
    position: relative;
    width: ${deskWidth}px;
    height: ${deskHeight}px;
    background: center/ ${deskWidth}px ${deskHeight}px url(${bg_05}) no-repeat;
`;

const itemSizeParams = {
    s: 80,
    m: 100,
    l: 120,
};

const itemPosParams = [
    {
        top: 30,
        left: 35,
    },
    {
        top: 15,
        left: 50,
    },
    {
        top: 20,
        left: 70,
    },
    {
        top: 25,
        left: 15,
    },
    {
        top: 38,
        left: 60,
    },
];

const Item = styled.img<{
    width?: number;
    height?: number;
    itemNum: number;
    isSelectMode: boolean;
}>`
    display: block;
    position: absolute;
    width: ${({ width }) => (width ? `${width}px` : `${itemSizeParams.l}px`)};
    height: ${({ height }) =>
        height ? `${height}px` : `${itemSizeParams.l}px`};
    top: ${({ itemNum }) =>
        itemNum
            ? `${itemPosParams[itemNum].top}%`
            : `${itemPosParams[0].top}%`};
    left: ${({ itemNum }) =>
        itemNum
            ? `${itemPosParams[itemNum].left}%`
            : `${itemPosParams[0].left}%`};
    transform: translate(-50%, -50%);
    cursor: ${({ isSelectMode }) => (isSelectMode ? "pointer" : `inherit`)};
    transform: translate(-50%, -50%);
`;

const SelectedItem = styled.div<{
    width?: number;
    height?: number;
    itemNum: number;
}>`
    display: block;
    position: absolute;
    width: ${({ width }) => (width ? `${width}px` : `${itemSizeParams.l}px`)};
    height: ${({ height }) =>
        height ? `${height}px` : `${itemSizeParams.l}px`};
    top: ${({ itemNum }) =>
        itemNum
            ? `${itemPosParams[itemNum].top}%`
            : `${itemPosParams[0].top}%`};
    left: ${({ itemNum }) =>
        itemNum
            ? `${itemPosParams[itemNum].left}%`
            : `${itemPosParams[0].left}%`};
    transform: translate(-50%, -50%);
`;

const InBoxItem = styled(SelectedItem)``;

export default SceneOfSmallRoom;
