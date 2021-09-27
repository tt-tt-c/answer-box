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
}

export type Stage1Alias = {
    isCleared: boolean;
    problemNum: number;
    selectedItem: SelectedItemAlias | null;
    isSelectMode: boolean;
    storageItems: Array<ItemAlias>;
    inTransparentBoxItem: SelectedItemAlias | null;
    boxA: SelectedItemAlias | null;
    smile: SelectedItemAlias | null;
    mysterySlide: null | Blob;
};