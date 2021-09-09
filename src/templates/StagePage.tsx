import {GameLayout} from "../components/Stage";
import React from "react";
import { Title } from "../components/Common";
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps<{
    stageId: string;
   }>;

const StagePage: React.FC<Props> = (props) => {
    const stageId = props.match.params.stageId;
    return (
        <>
            <GameLayout>
                <Title>{`STAGE ${stageId}`}</Title>
            </GameLayout>
        </>
    );
};

export default StagePage;
