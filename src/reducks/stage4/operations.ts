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
import { stage4Actions } from "./actions";
import {
    getInTransparentBoxItem,
    getProblemNum,
    getProcessNum,
    getSelectedItem,    
} from "./selectors";
import { ItemAlias } from "./types";

export const fetchStorageItems = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(state.stage4);

        const { items, imageBlobs, inBoxItemId, boxAId, smileId } =
            await getItems(4, problemNum, 1);

        const initItems: Array<ItemAlias> = [];

        const initialInBoxItem = getInTransparentBoxItem(state.stage4);

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

        dispatch(stage4Actions.updateStorageItems([...initItems]));
        if (inBoxItem)
            dispatch(stage4Actions.updateInTransparentBoxItem(inBoxItem));
        if (boxA) dispatch(stage4Actions.updateBoxA(boxA));
        if (smile) dispatch(stage4Actions.updateSmile(smile));
        dispatch(loadingActions.hideLoading());
    };
};

export const fetchSmallRoomItems = (placeId: 1|2|3|4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(state.stage4);
        const processNum = getProcessNum(state.stage4);

        const { items, imageBlobs } =
            await getItems(4, problemNum, processNum, placeId);

        const initItems: Array<ItemAlias> = [];

        for (let i = 0; i < items.length; i++) {

                initItems.push({
                    id: items[i].id.toString(),
                    name: items[i].name,
                    img: imageBlobs[i],
                    size: items[i].image_size,
                });
        }

        let smallRoomItems = {...state.stage4.smallRoomItems}
        smallRoomItems[placeId] = [...initItems]

        dispatch(stage4Actions.updateSmallRoomItems({...smallRoomItems}));

        dispatch(loadingActions.hideLoading());
    };
};

export const sendItem = (placeId: 1 | 2 | 3 | 4) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const stage4State = getState().stage4;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage4State);
        const processNum = getProcessNum(stage4State);
        const inBoxItem = getInTransparentBoxItem(stage4State);
        const selectedItem = getSelectedItem(stage4State);

        if (selectedItem) {
            const { isCorrect } = await sendItemFunc(
                4,
                Number(selectedItem.id),
                problemNum,
                processNum,
                placeId,
                Number(inBoxItem?.id),
            );
            if (isCorrect) {
                dispatch(stage4Actions.updateProcessNum(processNum+1));
                dispatch(modalsActions.showRightOrWrongModal(true));
            } else {
                //不正解の表示
                dispatch(modalsActions.showRightOrWrongModal(false));
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
        const stage4State = getState().stage4;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage4State);
        const selectedItem = getSelectedItem(stage4State);
        dispatch(stage4Actions.releaseSelectedItem());

        if (selectedItem) {
            const { isCorrect, isCleared } = await answerByItemFunc(
                4,
                Number(selectedItem.id),
                problemNum,
                placeId
            );
            if (isCleared) {
                //ステージクリアモーダル表示
                dispatch(modalsActions.showStageClearModal());
            } else if (isCorrect) {
                //別の部屋のアイテムセット「4-5」
                dispatch(stage4Actions.updateProblemNum(problemNum+1));                           
                dispatch(stage4Actions.updateProcessNum(1));                           

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
        const stage4State = getState().stage4;
        dispatch(loadingActions.showLoading());
        const problemNum = getProblemNum(stage4State);

        const mysterySlide = await getMysterySlide(4, problemNum);        

        if (mysterySlide)
            dispatch(
                stage4Actions.updateMysterySlide(mysterySlide.mysterySlide)
            );
        dispatch(loadingActions.hideLoading());
    };
};
