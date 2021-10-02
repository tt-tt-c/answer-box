import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "../../reducks/store/store";
import styled from "styled-components";
import { bg_02 } from "../../assets/img";
import {
    getInTransparentBoxItem,
    getIsSelectMode,
    getProblemNum,
    getProcessNum,
    getSelectedItem,
    getStorageItems,
} from "../../reducks/store/selectors";
import { StageNum } from "../Common/Route";
import { useDispatch } from "react-redux";
import { stageActions } from "../../reducks/store/actions";
import { loadingActions } from "../../reducks/loading/actions";
import { getBlobUrl } from "../../function/common";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.scss";
import { fetchStorageItems } from "../../reducks/store/operations";
SwipeCore.use([Pagination, Navigation]);

const SceneOfStorage = () => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const problemNum = getProblemNum(stageId, selector);
    const processNum = getProcessNum(stageId, selector);
    const storageItems = getStorageItems(stageId, selector);
    const isSelectMode = getIsSelectMode(stageId, selector);
    const selectedItem = getSelectedItem(stageId, selector);
    const inTransparentBoxItem = getInTransparentBoxItem(stageId, selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStorageItems(stageId));
    }, [dispatch,stageId, problemNum, processNum])

    const itemElms = [];
    for (let i = 0; i < storageItems.length; i += 5) {
        const pickItems = storageItems.slice(
            i,
            i + 5 < storageItems.length ? i + 5 : storageItems.length
        );
        if (
            storageItems.length - i === 1 &&
            ((selectedItem && storageItems[i].id === selectedItem.id) ||
                (inTransparentBoxItem &&
                    storageItems[i].id === inTransparentBoxItem.id))
        )
            continue;
        
        itemElms.push(
            <DeskWrapper key={`storageItemWrapper${i}`}>
                {pickItems.map((item, index: number) => {
                    if (
                        (!selectedItem || item.id !== selectedItem.id) &&
                        (!inTransparentBoxItem ||
                            item.id !== inTransparentBoxItem.id)
                    ) {
                        return (
                            <Item
                                key={`storageItem${item.id}${i + index}`}
                                src={
                                    item && item.img instanceof Blob
                                        ? getBlobUrl(item.img)
                                        : ""
                                }
                                width={itemSizeParams[item.size]}
                                height={itemSizeParams[item.size]}
                                itemNum={index % 5}
                                isSelectMode={isSelectMode}
                                onClick={() => {
                                    if (isSelectMode) {
                                        dispatch(loadingActions.showLoading());
                                        const storageItem =
                                            storageItems[i + index];
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
                                        dispatch(loadingActions.hideLoading());
                                    }
                                }}
                            />
                        );
                    } else if (selectedItem && item.id === selectedItem.id) {
                        return (
                            <SelectedItem
                                key={`storageItem${item.id}${index}`}
                                width={itemSizeParams[item.size]}
                                height={itemSizeParams[item.size]}
                                itemNum={index % 5}
                            />
                        );
                    } else {
                        return (
                            <InBoxItem
                                key={`storageItem${item.id}${index}`}
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

    return (
        <>
            <Wrapper>
                {/* <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {itemElms.map((itemElm) => {
                        return <SwiperSlide>{itemElm}</SwiperSlide>;
                    })}
                </Swiper> */}
                {itemElms}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    height: auto;
    width: 100%;
    overflow-x: hidden;
`;

const deskWidth = 1000;
const deskHeight = 420;

const DeskWrapper = styled.div`
    position: relative;
    width: ${deskWidth}px;
    height: ${deskHeight}px;
    background: center/ ${deskWidth}px ${deskHeight}px url(${bg_02}) no-repeat;
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
        left: 80,
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

export default SceneOfStorage;
