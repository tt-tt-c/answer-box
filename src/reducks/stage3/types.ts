export type SelectedItemAlias = {
    name: string;
    img: string;
    id: string;
};

export type ItemAlias = {
    id: string;
    img: string;
    name: string;
    size: "s" | "m" | "l";
};

export type smallRoomItemsAlias = {
    [k: number]: ItemAlias[];
};

export type Stage3Alias = {
    isCleared: boolean;
    problemNum: number;
    processNum: number;
    selectedItem: SelectedItemAlias | null;
    isSelectMode: boolean;
    storageItems: Array<ItemAlias>;
    inTransparentBoxItem: SelectedItemAlias | null;
    mysterySlide: null | string;
    smallRoomItems: smallRoomItemsAlias | null;
};
