import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useSelector } from '../../reducks/store/store';
import { StageNum } from '../Common/Route';

const SceneOfMysterySlide = () => {
    const selector = useSelector();
    const { stageId } = useParams<{ stageId: StageNum }>();


    useEffect(() => {

    }, []);

    return (
        <div>
            
        </div>
    )
}

export default SceneOfMysterySlide
