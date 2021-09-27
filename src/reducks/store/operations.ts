import {
    fetchMysterySlide as fetchMysterySlideOf1,   
    answerByItem as answerByItemOf1,
    fetchStorageItems as fetchStorageItemsOf1,
} from "../stage1/operations";
import {
    fetchMysterySlide as fetchMysterySlideOf2,   
    answerByItem as answerByItemOf2,
    fetchStorageItems as fetchStorageItemsOf2,
} from "../stage2/operations";
import {
    fetchMysterySlide as fetchMysterySlideOf3,   
    answerByItem as answerByItemOf3,
    fetchStorageItems as fetchStorageItemsOf3,
    fetchSmallRoomItems as fetchSmallRoomItemsOf3,
} from "../stage3/operations";
import {
    fetchMysterySlide as fetchMysterySlideOf4,
    sendItem as sendItemOf4,
    answerByItem as answerByItemOf4,
    fetchStorageItems as fetchStorageItemsOf4,
    fetchSmallRoomItems as fetchSmallRoomItemsOf4,
} from "../stage4/operations";
import {
    fetchMysterySlide as fetchMysterySlideOf5,
    sendItem as sendItemOf5,
    answerByItem as answerByItemOf5,
    fetchStorageItems as fetchStorageItemsOf5,
    fetchSmallRoomItems as fetchSmallRoomItemsOf5,
} from "../stage5/operations";

export const fetchStorageItems = (stageId: string) => {
    switch (stageId) {
        case "1":
            return fetchStorageItemsOf1();
        case "2":
            return fetchStorageItemsOf2();
        case "3":
            return fetchStorageItemsOf3();
        case "4":
            return fetchStorageItemsOf4();
        default:
            return fetchStorageItemsOf5();
    }
};

export const sendItem = (stageId: string, placeId: 1 | 2 | 3 | 4) => {
    switch (stageId) {
        case "4":
            return sendItemOf4(placeId);
        default:
            return sendItemOf5(placeId);
    }
};

export const answerByItem = (stageId: string, placeId: 1 | 2 | 3 | 4) => {
    switch (stageId) {
        case "1":
            return answerByItemOf1(placeId);
        case "2":
            return answerByItemOf2(placeId);
        case "3":
            return answerByItemOf3(placeId);
        case "4":
            return answerByItemOf4(placeId);
        default:
            return answerByItemOf5(placeId);
    }
};

export const fetchMysterySlide = (stageId: string) => {
    switch (stageId) {
        case "1":
            return fetchMysterySlideOf1();
        case "2":
            return fetchMysterySlideOf2();
        case "3":
            return fetchMysterySlideOf3();
        case "4":
            return fetchMysterySlideOf4();
        default:
            return fetchMysterySlideOf5();
    }
};

export const fetchSmallRoomItems = (
    stageId: string,
    placeId: 1 | 2 | 3 | 4
) => {
    switch (stageId) {
        case "3":
            return fetchSmallRoomItemsOf3(placeId);
        case "4":
            return fetchSmallRoomItemsOf4(placeId);
        default:
            return fetchSmallRoomItemsOf5(placeId);
    }
};
