import React from "react";
import styled from "styled-components";

type Props = {
    style: {
        [key: string]: string;
    };
    onClick?: Function;
    isShowned?: boolean;
};

/**
 *Overlay
 *Styleでbackground, z-index等の指定が必要
 *
 */
const Overlay: React.FC<Props> = ({ style, onClick, isShowned = true }) => {
    return (
        <>
            {isShowned && (
                <Wrapper
                    style={style}
                    onClick={() => {
                        if (onClick !== undefined) onClick();
                    }}
                ></Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export default Overlay;
