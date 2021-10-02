import styled from "styled-components";
import { path } from "../components/Common/Route";
import { Title, Link01 } from "../components/Common";
import { useDispatch } from "react-redux";
import { resetActions } from "../reducks/store/actions";
import { useSelector } from "../reducks/store/store";
import { getIsCleared } from "../reducks/stage5/selectors";
import { useEffect } from "react";
import { push } from "connected-react-router";

const ClearPage = () => {
    const selector = useSelector();
    const dispatch = useDispatch();
    const isAllCleared = getIsCleared(selector.stage5);
    useEffect(() => {
        if (!isAllCleared) dispatch(push(path.top));
    }, [dispatch, isAllCleared]);
    return (
        <>
            {isAllCleared && (
                <>
                    <Wrapper>
                        <Title>GAME CLEAR</Title>

                        <Link01
                            to={path.stage1}
                            style={LinkStyle}
                            onClick={() => {
                                dispatch(resetActions.AllReset());
                            }}
                        >
                            GAME RESET
                        </Link01>
                    </Wrapper>
                    <Copyright>
                        <small>&copy;2021 tt-tt-c</small>
                    </Copyright>
                    <div className="overlay"></div>
                    <div id="yt_player"></div>
                </>
            )}
        </>
    );
};

const Wrapper = styled.section`
    box-sizing: border-box;
    min-height: 100vh;
    padding: 50px calc(50% - 540px) 100px;
    text-align: center;
`;

const LinkStyle = {
    margin: "100px auto 0",
    width: "60%",
    padding: "1.5rem 0",
    border: "1px solid #fff",
};

const Copyright = styled.p`
    font-size: 14px;
    line-height: 4;
    text-align: center;
    color: #000;
    background-color: #fff;
`;

export default ClearPage;
