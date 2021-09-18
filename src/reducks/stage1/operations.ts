import { AppDispatch } from "../..";
import {
    getItems,
    sendItem as sendItemFunc,
    answerByItem as answerByItemFunc,
} from "../../function/common";
import { loadingActions } from "../loading/actions";
import { AppState } from "../store/store";
import { stage1Actions } from "./actions";
import { getInTransparentBoxItem, getProblemNum, getSelectedItem, getStorageItems } from "./selectors";
import { ItemAlias } from "./types";

export const fetchStorageItems = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(state.stage1);

        const { items, imageUrls, inBoxItemId, boxAId, egaoId } =
            await getItems(1, problemNum, 1);

        const initItems: Array<ItemAlias> = [];

        const initialInBoxItem = getInTransparentBoxItem(state.stage1);

        let inBoxItem:ItemAlias| null = null;

        let inTransparentBoxId = initialInBoxItem ? initialInBoxItem.id : inBoxItemId;

        for (let i = 0; i < items.length; i++) {
            if (
                items[i].id !== boxAId &&
                items[i].id !== egaoId &&
                items[i].id !== inTransparentBoxId
            ) {
                initItems.push({
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageUrls[i],
                    size: items[i].image_size,
                });
            }
            if (!inBoxItem && items[i].id === inBoxItemId)
                inBoxItem = {
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageUrls[i],
                    size: items[i].size,
                };
        }

        dispatch(stage1Actions.updateStorageItems([...initItems]));
        if (inBoxItem)
            dispatch(stage1Actions.updateInTransparentBoxItem(inBoxItem));
        dispatch(loadingActions.hideLoading());
    };
};

export const sendItem = (placeId: 1 | 2 | 3 | 4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const stage1State = getState().stage1;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage1State);
        const selectedItem = getSelectedItem(stage1State);
        const storageItems = getStorageItems(stage1State);

        if (selectedItem) {
            const { isCorrect, item, imageUrl } = await sendItemFunc(
                1,
                Number(selectedItem.id),
                problemNum,
                1,
                placeId
            );
            if (isCorrect && item && imageUrl) {
                const newStorageItems = storageItems.filter(
                    (storageItem) => storageItem.id !== item.id
                );
                dispatch(
                    stage1Actions.updateStorageItems([...newStorageItems])
                );
                //別の部屋のアイテムセット「3-5」
            } else {
                //不正解の表示
            }
        } else {
            alert("アイテムを選択してください");
        }
        dispatch(loadingActions.hideLoading());
    };
};

//answerByItem(モノで解答、正誤判定)
export const answerByItem = (placeId: 1 | 2 | 3 | 4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const stage1State = getState().stage1;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage1State);
        const selectedItem = getSelectedItem(stage1State);
        const storageItems = getStorageItems(stage1State);

        if (selectedItem) {
            const { isCorrect, isCleared, mysterySlide } =
                await answerByItemFunc(
                    1,
                    Number(selectedItem.id),
                    problemNum,
                    1,
                    placeId
                );
            if (isCleared) {
                //ステージクリアモーダル表示
            }
            if (isCorrect && mysterySlide) {
                const newStorageItems = storageItems.filter(
                    (storageItem) => storageItem.id !== selectedItem.id
                );
                dispatch(stage1Actions.releaseSelectedItem());
                dispatch(
                    stage1Actions.updateStorageItems([...newStorageItems])
                );
                //別の部屋のアイテムセット「3-5」

                //正解モーダル表示
            } else {
                //不正解モーダル表示
            }
        } else {
            alert("アイテムを選択してください");
        }
        dispatch(loadingActions.hideLoading());
    };
};
