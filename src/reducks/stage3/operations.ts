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
import { stage3Actions } from "./actions";
import {
    getInTransparentBoxItem,
    getProblemNum,
    getProcessNum,
    getSelectedItem,
    getStorageItems,
} from "./selectors";
import { ItemAlias } from "./types";

export const fetchStorageItems = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(state.stage3);

        const { items, imageBlobs, inBoxItemId, boxAId, smileId } =
            await getItems(3, problemNum, 1);

        const initItems: Array<ItemAlias> = [];

        const initialInBoxItem = getInTransparentBoxItem(state.stage3);

        let inBoxItem: ItemAlias | null = null;
        let boxA: ItemAlias | null = null;
        let smile: ItemAlias | null = null;

        let inTransparentBoxId = initialInBoxItem
            ? initialInBoxItem.id
            : inBoxItemId;

        for (let i = 0; i < items.length; i++) {
            if (
                items[i].id !== boxAId &&
                items[i].id !== smileId &&
                items[i].id !== inTransparentBoxId
            ) {
                initItems.push({
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageBlobs[i],
                    size: items[i].image_size,
                });
            }
            if (!initialInBoxItem && items[i].id === inBoxItemId)
                inBoxItem = {
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageBlobs[i],
                    size: items[i].size,
                };
            if (items[i].id === boxAId)
                boxA = {
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageBlobs[i],
                    size: items[i].size,
                };
            if (items[i].id === smileId)
                smile = {
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageBlobs[i],
                    size: items[i].size,
                };
        }

        dispatch(stage3Actions.updateStorageItems([...initItems]));
        if (inBoxItem)
            dispatch(stage3Actions.updateInTransparentBoxItem(inBoxItem));
        if (boxA) dispatch(stage3Actions.updateBoxA(boxA));
        if (smile) dispatch(stage3Actions.updateSmile(smile));
        dispatch(loadingActions.hideLoading());
    };
};

export const fetchSmallRoomItems = (placeId: 1|2|3|4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(state.stage3);
        const processNum = getProcessNum(state.stage3);

        const { items, imageBlobs } =
            await getItems(3, problemNum, processNum, placeId);

        const initItems: Array<ItemAlias> = [];

        for (let i = 0; i < items.length; i++) {

                initItems.push({
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageBlobs[i],
                    size: items[i].image_size,
                });
        }

        let smallRoomItems = {...state.stage3.smallRoomItems}
        smallRoomItems[placeId] = [...initItems]

        dispatch(stage3Actions.updateSmallRoomItems({...smallRoomItems}));

        dispatch(loadingActions.hideLoading());
    };
};

//answerByItem(モノで解答、正誤判定)
export const answerByItem = (placeId: 1 | 2 | 3 | 4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const stage3State = getState().stage3;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage3State);
        const selectedItem = getSelectedItem(stage3State);
        const storageItems = getStorageItems(stage3State);
        dispatch(stage3Actions.releaseSelectedItem());

        console.log("stage3 answer")

        if (selectedItem) {
            const { isCorrect, isCleared } = await answerByItemFunc(
                3,
                Number(selectedItem.id),
                problemNum,
                placeId
            );
            if(isCleared || isCorrect) {
                const newStorageItems = storageItems.filter(
                    (storageItem) => storageItem.id !== selectedItem.id
                );
                dispatch(
                    stage3Actions.updateStorageItems([...newStorageItems])
                );
            } 
            if (isCleared) {
                //ステージクリアモーダル表示
                dispatch(modalsActions.showStageClearModal());
            } else if (isCorrect) {
                //別の部屋のアイテムセット「3-5」
                dispatch(stage3Actions.updateProblemNum(problemNum+1));                           
                dispatch(stage3Actions.updateProcessNum(1));                           

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
        const stage3State = getState().stage3;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage3State);

        const mysterySlide = await getMysterySlide(3, problemNum);        

        if (mysterySlide)
            dispatch(
                stage3Actions.updateMysterySlide(mysterySlide.mysterySlide)
            );
        dispatch(loadingActions.hideLoading());
    };
};
