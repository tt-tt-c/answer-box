export type selectedItemAlias = {
    name: string;
    img: string;
    id: string;
};

export type Stage2Alias = {
    isCleared: boolean;
    problemNum: number;
    selectedItem: selectedItemAlias | null;
    isSelectMode: boolean;
};
