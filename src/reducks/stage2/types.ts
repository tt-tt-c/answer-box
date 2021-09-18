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
}

export type Stage2Alias = {
    isCleared: boolean;
    problemNum: number;
    selectedItem: SelectedItemAlias | null;
    isSelectMode: boolean;
    storageItems: Array<ItemAlias>;
    inTransparentBoxItem: SelectedItemAlias | null;
    mysterySlide: null | string;
};