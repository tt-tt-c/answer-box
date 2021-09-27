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
    const { items, images, inBoxItemId, boxAId, smileId } = json;    
    const imageBlobs = [];
    for (let i = 0; i < images.length; i++) {
        imageBlobs[i] = getBlob(images[i].data, "image/png");
    }
    return {
        items: items,
        imageBlobs: imageBlobs,
        inBoxItemId: inBoxItemId,
        boxAId: boxAId,
        smileId: smileId,
    };
};

//sendItem(モノを部屋に送信)
export const sendItem = async (
    stageId: number,
    itemId: number,
    problemNum: number,
    processNum: number,
    placeId: number,
    inBoxItemId: number | null
) => {
    const path = `${
        paths.send
    }/${stageId}?prevItemId=${itemId}&problemNum=${problemNum}&processNum=${processNum}&placeId=${placeId}${
        inBoxItemId ? `&inBoxItemId=${inBoxItemId}` : ""
    }`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();
    const { isCorrect } = json;
    return {
        isCorrect: isCorrect,
    };
};

//answerByItem(モノで解答、正誤判定)
//正解なら新しいスライド、問題番号プラ1,ストレージ更新
//不正解ならやり直し
export const answerByItem = async (
    stageId: number,
    itemId: number,
    problemNum: number,
    placeId: number
) => {
    const path = `${paths.answer}/${stageId}?itemId=${itemId}&problemNum=${problemNum}&placeId=${placeId}`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();

    const { isCleared, isCorrect } = json;

    return {
        isCleared: isCleared,
        isCorrect: isCorrect,
    };
};

export const fetchMysterySlide = async (
    stageId: number,
    problemNum: number
) => {
    const path = `${paths.mysterySlide}/${stageId}?problemNum=${problemNum}`;
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();

    const { mysterySlide } = json;

    const blob = getBlob(mysterySlide.data);

    return {
        mysterySlide: blob,
    };
};

export const getBlobUrl = (blob: Blob) => {    
    return URL.createObjectURL(blob);
};

export const getBlob = (arrayBuffer: Buffer, type = "image/jpeg") => {
    let blob;
    const bytes = new Uint8Array(arrayBuffer);
    blob = new Blob([bytes], { type: type });
    return blob;
};
