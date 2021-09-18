import { AppDispatch } from "../..";
import {
    getItems,
    sendItem as sendItemFunc,
    answerByItem as answerByItemFunc,
    fetchMysterySlide as getMysterySlide,
} from "../../function/common";
import { loadingActions } from "../loading/actions";
import { modalsActions } from "../modals/actions";
import { AppState } from "../store/store";
import { stage2Actions } from "./actions";
import {
    getInTransparentBoxItem,
    getProblemNum,
    getSelectedItem,
    getStorageItems,
} from "./selectors";
import { ItemAlias } from "./types";

export const fetchStorageItems = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(state.stage2);

        const { items, imageUrls, inBoxItemId, boxAId, egaoId } =
            await getItems(2, problemNum, 1);

        const initItems: Array<ItemAlias> = [];

        const initialInBoxItem = getInTransparentBoxItem(state.stage2);

        let inBoxItem: ItemAlias | null = null;

        let inTransparentBoxId = initialInBoxItem
            ? initialInBoxItem.id
            : inBoxItemId;

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

        dispatch(stage2Actions.updateStorageItems([...initItems]));
        if (inBoxItem)
            dispatch(stage2Actions.updateInTransparentBoxItem(inBoxItem));
        dispatch(loadingActions.hideLoading());
    };
};

export const sendItem = (placeId: 1 | 2 | 3 | 4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const stage2State = getState().stage2;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage2State);
        const selectedItem = getSelectedItem(stage2State);
        const storageItems = getStorageItems(stage2State);

        if (selectedItem) {
            const { isCorrect, item, imageUrl } = await sendItemFunc(
                2,
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
                    stage2Actions.updateStorageItems([...newStorageItems])
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
        const stage2State = getState().stage2;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage2State);
        const selectedItem = getSelectedItem(stage2State);
        const storageItems = getStorageItems(stage2State);
        dispatch(stage2Actions.releaseSelectedItem());

        console.log("stage2 answer")

        if (selectedItem) {
            const { isCorrect, isCleared } = await answerByItemFunc(
                2,
                Number(selectedItem.id),
                problemNum,
                placeId
            );
            if(isCleared || isCorrect) {
                const newStorageItems = storageItems.filter(
                    (storageItem) => storageItem.id !== selectedItem.id
                );
                dispatch(
                    stage2Actions.updateStorageItems([...newStorageItems])
                );
            } 
            if (isCleared) {
                //ステージクリアモーダル表示
                dispatch(modalsActions.showStageClearModal());
            } else if (isCorrect) {
                //別の部屋のアイテムセット「3-5」

                //正解モーダル表示
                dispatch(modalsActions.showRightOrWrongModal(true));
            } else {
                //不正解モーダル表示
                dispatch(modalsActions.showRightOrWrongModal(false));
            }
        } else {
            alert("アイテムを選択してください");
        }
        dispatch(loadingActions.hideLoading());
    };
};

export const fetchMysterySlide = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const stage2State = getState().stage2;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage2State);

        const mysterySlide = await getMysterySlide(2, problemNum);        

        if (mysterySlide)
            dispatch(
                stage2Actions.updateMysterySlide(mysterySlide.mysterySlide)
            );
        dispatch(loadingActions.hideLoading());
    };
};
