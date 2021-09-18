import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getIsCleared } from "../../reducks/store/selectors";
import { useSelector } from "../../reducks/store/store";
import { path, StageNum } from "./Route";

const pre: {
    2: StageNum;
    3: StageNum;
    4: StageNum;
    5: StageNum;
} = {
    2: "1",
    3: "2",
    4: "3",
    5: "4",
};

const StageAuth: React.FC = ({ children }) => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();
    const [isAuthed, setIsAuthed] = useState(false);
    const dispatch = useDispatch();
    const isPrevStageCleared =
            stageId === "1" ? true : getIsCleared(pre[stageId],selector);

    useEffect(() => {
        setIsAuthed(isPrevStageCleared);
        if (!isPrevStageCleared) {
            dispatch(push(path.stage1));
        }
    }, [dispatch, stageId,isPrevStageCleared]);

    return <>{isAuthed && children}</>;
};

export default StageAuth;
