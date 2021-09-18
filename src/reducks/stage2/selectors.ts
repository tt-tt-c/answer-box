import { Stage2Alias } from "./types";

export const getIsCleared = (stage2: Stage2Alias) => stage2.isCleared;

export const getProblemNum = (stage2: Stage2Alias) => stage2.problemNum;

export const getSelectedItem = (stage2: Stage2Alias) => stage2.selectedItem;

export const getInTransparentBoxItem = (stage2: Stage2Alias) => stage2.inTransparentBoxItem;

export const getIsSelectMode = (stage2: Stage2Alias) => stage2.isSelectMode;

export const getStorageItems = (stage2: Stage2Alias) => stage2.storageItems;

export const getMysterySlide = (stage2: Stage2Alias) => stage2.mysterySlide;