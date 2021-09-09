import React from "react";
import styled from "styled-components";

const Subtitle:React.FC = ({children}) => {
    return <SubtitleElm>{children}</SubtitleElm>;
};

export default Subtitle;

const SubtitleElm = styled.h2`
    font-size: 38px;
    font-weight: 600;
    display: block;
    span {
        font-size: 18px;
        font-weight: 500;
        margin-top: 10px;
        display: block;
        color: #ccc;
    }
`;
