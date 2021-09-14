export const API_PATH = `http://192.168.33.12:8001/api/stage`;

//InitItems();
export const getItems  = async (stageId: number, problemNum: number) => {
    const path = `${API_PATH}/${stageId}/${problemNum}`
    const fetchData = await fetch(path, { mode: "cors" });
    const json = await fetchData.json();
    const items = json[0];
    const imageData = json[1];
    const blobs = [];
    const blobUrls = []

    for (let i = 0; i < imageData.length; i++) {
        const bytes = new Uint8Array(imageData[i].data);
        blobs[i] = new Blob([bytes], { type: "image/png" });
        blobUrls[i] = URL.createObjectURL(blobs[i]);
    }

    return {items: items, imageUrls: blobUrls}
};

//SendItem(モノを部屋に送信)


//AnswerByItem(モノで解答、正誤判定)