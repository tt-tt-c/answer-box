import { StageNum } from "../../components/Common/Route"
import { getIsCleared as getIsClearedOf1, getProblemNum as getProblemNumOf1} from "../stage1/selectors"
import { getIsCleared as getIsClearedOf2, getProblemNum as getProblemNumOf2} from "../stage2/selectors"
import { AppState } from "./store"

export const getIsCleared = (stageId: StageNum, state: AppState) => {
    switch(stageId) {
        case "1": return getIsClearedOf1(state.stage1);
        case "2": return getIsClearedOf2(state.stage2);
        case "3": return getIsClearedOf2(state.stage2);
        case "4": return getIsClearedOf2(state.stage2);
        default: return getIsClearedOf2(state.stage2);

    }
}

export const getProblemNum = (stageId: StageNum, state: AppState) => {
    switch(stageId) {
        case "1": return getProblemNumOf1(state.stage1);
        case "2": return getProblemNumOf2(state.stage2);
        case "3": return getProblemNumOf2(state.stage2);
        case "4": return getProblemNumOf2(state.stage2);
        default: return getProblemNumOf2(state.stage2);
    }
}