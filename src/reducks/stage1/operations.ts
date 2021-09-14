import { AppDispatch } from "../..";
import { getItems } from "../../function/common";
import { loadingActions } from "../loading/actions";
import { AppState } from "../store/store";
import { stage1Actions } from "./actions";
import { ItemAlias } from "./types";

//InitItems();

export const fetchStorageInitItems = () => {
    return async (dispatch: AppDispatch, getState:()=> AppState) => {
        const state = getState();
        dispatch(loadingActions.showLoading());
        const { items, imageUrls } = await getItems(1, 0);

        const initItems: Array<ItemAlias> = [...state.stage1.storageItems];
        for (let i = 0; i < items.length; i++) {
            initItems.push({
                id: items[i].id.toString(),
                name: items[i].name,
                img: imageUrls[i],
                size: items[i].image_size,                
            });
        }

        dispatch(stage1Actions.updateStorageItems([...initItems]))
        dispatch(loadingActions.hideLoading());        
    };
};

//SendItem(モノを部屋に送信)

//AnswerByItem(モノで解答、正誤判定)
