import { stage4Actions } from "../stage4/actions";
import { stage3Actions } from "../stage3/actions";
import { stage2Actions } from "../stage2/actions";
import { stage1Actions } from "../stage1/actions";
import { stage5Actions } from "../stage5/actions";
import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const resetActions = {
    AllReset: actionCreator("ALL_RESET"),
};

export const stageActions = {
    "1": stage1Actions,
    "2": stage2Actions,
    "3": stage3Actions,
    "4": stage4Actions,
    "5": stage5Actions,
};
