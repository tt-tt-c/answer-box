export const API_PATH = `http://localhost:8001/answer-box/api/`;

const paths = {
    items: API_PATH + "items",
    item: API_PATH + "item",
    answer: API_PATH + "answer",
    send: API_PATH + "send",
    mysterySlide: API_PATH + "mystery-slide",
};

export const getItems = async (
    stageId: number,
    problemNum: number,
    processNum: number,
    placeId?: number
) => {
    const path = `${
        paths.items
    }/${stageId}?problemNum=${problemNum}&processNum=${processNum}${
        !placeId ? `` : `&placeId=${placeId}`
    }`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();
    const { items, images, inBoxItemId, boxAId, egaoId } = json;
    const blobs = [];
    const blobUrls = [];
    for (let i = 0; i < images.length; i++) {
        const bytes = new Uint8Array(images[i].data);
        blobs[i] = new Blob([bytes], { type: "image/png" });
        blobUrls[i] = URL.createObjectURL(blobs[i]);
    }
    return { items: items, imageUrls: blobUrls, inBoxItemId: inBoxItemId, boxAId: boxAId, egaoId: egaoId };
};

//sendItem(モノを部屋に送信)
export const sendItem = async (
    stageId: number,
    itemId: number,
    problemNum: number,
    processNum: number,
    placeId: number,
    inBoxItemId?: number
) => {
    const path = `${
        paths.send
    }/${stageId}?itemId=${itemId}&problemNum=${problemNum}&processNum=${processNum}&placeId=${placeId}${
        inBoxItemId ?  `&inBoxItemId=${inBoxItemId}`:''
    }`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();
    const { isCorrect, item, image } = json;
    let blob;
    let blobUrl;
    if (isCorrect && item && image) {
        const bytes = new Uint8Array(image.data);
        blob = new Blob([bytes], { type: "image/png" });
        blobUrl = URL.createObjectURL(blob);
    }
    return {
        isCorrect: isCorrect,
        item: item,
        imageUrl: blobUrl,
    };
};

//answerByItem(モノで解答、正誤判定)
//正解なら新しいスライド、問題番号プラ1,ストレージ更新
//不正解ならやり直し
export const answerByItem = async (
    stageId: number,
    itemId: number,
    problemNum: number,
    processNum: number,
    placeId?: number
) => {
    const path = `${
        paths.answer
    }/${stageId}?itemId=${itemId}&problemNum=${problemNum}&processNum=${processNum}&${
        !placeId ? `` : `placeId=${placeId}`
    }`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();

    const { isCleared, isCorrect, mysterySlide } = json;
    let blob;
    let blobUrl;
    if (isCorrect && mysterySlide) {
        const bytes = new Uint8Array(mysterySlide.data);
        blob = new Blob([bytes], { type: "image/jpg" });
        blobUrl = URL.createObjectURL(blob);
    }

    return {
        isCleared: isCleared,
        isCorrect: isCorrect,
        mysterySlide: blobUrl,
    };
};

//fetchMysterySlide
export const fetchMysterySlide = async (stageId: number) => {
    const path = `${paths.mysterySlide}/${stageId}`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();

    const { mysterySlide } = json;
    let blob;
    let blobUrl;
    if (mysterySlide) {
        const bytes = new Uint8Array(mysterySlide.data);
        blob = new Blob([bytes], { type: "image/jpg" });
        blobUrl = URL.createObjectURL(blob);
    } else {
        alert("読み込みに失敗しました");
    }

    return {
        mysterySlide: blobUrl,
    };
};
