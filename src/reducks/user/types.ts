export type selectedThingAlias = {
    name: string;
    img: string;
};

export type UserAlias = {
    selectedThing: selectedThingAlias | null;
    isSelectMode: boolean;
};
