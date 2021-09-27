export type SelectedItemAlias = {
    name: string;
    img: Blob;
    id: string;
};

export type ItemAlias = {
    id: string;
    img: Blob;
    name: string;
    size: "s" | "m" | "l";
};

export type smallRoomItemsAlias = {
    [k: number]: ItemAlias[];
};

export type Stage5Alias = {
    isCleared: boolean;
    problemNum: number;
    processNum: number;
    selectedItem: SelectedItemAlias | null;
    isSelectMode: boolean;
    storageItems: Array<ItemAlias>;
    inTransparentBoxItem: SelectedItemAlias | null;
    mysterySlide: null | Blob;
    smallRoomItems: smallRoomItemsAlias | null;
    boxA: SelectedItemAlias | null;
    smile: SelectedItemAlias | null;
};
