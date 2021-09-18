import {
    fetchMysterySlide as fetchMysterySlideOf1,
    sendItem as sendItemOf1,
    answerByItem as answerByItemOf1,
    fetchStorageItems as fetchStorageItemsOf1,
} from "../stage1/operations";
import {
    fetchMysterySlide as fetchMysterySlideOf2,
    sendItem as sendItemOf2,
    answerByItem as answerByItemOf2,
    fetchStorageItems as fetchStorageItemsOf2,
} from "../stage2/operations";
import {
    fetchMysterySlide as fetchMysterySlideOf3,
    sendItem as sendItemOf3,
    answerByItem as answerByItemOf3,
    fetchStorageItems as fetchStorageItemsOf3,
    fetchSmallRoomItems as fetchSmallRoomItemsOf3,
} from "../stage3/operations";

export const fetchStorageItems = (stageId: string) => {
    switch (stageId) {
        case "1":
            return fetchStorageItemsOf1();
        case "2":
            return fetchStorageItemsOf2();
        case "3":
            return fetchStorageItemsOf3();
        case "4":
            return fetchStorageItemsOf1();
        default:
            return fetchStorageItemsOf1();
    }
};

export const sendItem = (stageId: string, placeId: 1|2|3|4) => {
    switch (stageId) {
        case "1":
            return sendItemOf1(placeId);
        case "2":
            return sendItemOf2(placeId);
        case "3":
            return sendItemOf3(placeId);
        case "4":
            return sendItemOf1(placeId);
        default:
            return sendItemOf1(placeId);
    }
};

export const answerByItem = (stageId: string, placeId: 1|2|3|4) => {
    switch (stageId) {
        case "1":
            return answerByItemOf1(placeId);
        case "2":
            return answerByItemOf2(placeId);
        case "3":
            return answerByItemOf3(placeId);
        case "4":
            return answerByItemOf1(placeId);
        default:
            return answerByItemOf1(placeId);
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
            return fetchMysterySlideOf1();
        default:
            return fetchMysterySlideOf1();
    }
};

export const fetchSmallRoomItems = (stageId: string, placeId: 1|2|3|4) => {
    switch (stageId) {
        case "3":
            return fetchSmallRoomItemsOf3(placeId);
        case "4":
            return fetchSmallRoomItemsOf3(placeId);
        default:
            return fetchSmallRoomItemsOf3(placeId);
    }
};