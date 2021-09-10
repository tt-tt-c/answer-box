import actionCreatorFactory from "typescript-fsa";
import { selectedThingAlias } from "./types";

const actionCreator = actionCreatorFactory();

export const userActions = {
    releaseSelectedThing: actionCreator("RELEASE_SELECTED_THING"),
    updateSelectedThing: actionCreator<selectedThingAlias>("UPDATE_SELECTED_THING"),
    updateSeleteMode: actionCreator<boolean>("UPDATE_SELECTE_MODE"),
};
