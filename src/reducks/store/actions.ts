import { stage3Actions } from "../stage3/actions";
import { stage2Actions } from "../stage2/actions";
import { stage1Actions } from "../stage1/actions";

export const stageActions = {
    "1": stage1Actions,
    "2": stage2Actions,
    "3": stage3Actions,
    "4": stage1Actions,
    "5": stage1Actions,
};