import { Stage1Alias } from "./types";

export const getIsCleared = (stage1: Stage1Alias) => stage1.isCleared;

export const getProblemNum = (stage1: Stage1Alias) => stage1.problemNum;

export const getSelectedItem = (stage1: Stage1Alias) => stage1.selectedItem;

export const getInTransparentBoxItem = (stage1: Stage1Alias) => stage1.inTransparentBoxItem;

export const getIsSelectMode = (stage1: Stage1Alias) => stage1.isSelectMode;

export const getStorageItems = (stage1: Stage1Alias) => stage1.storageItems;

export const getMysterySlide = (stage1: Stage1Alias) => stage1.mysterySlide;