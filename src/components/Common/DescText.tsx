import React from "react";
import styled from "styled-components";

const DescText: React.FC = ({ children }) => {
    return <DescTextElm>{children}</DescTextElm>;
};

export default DescText;

const DescTextElm = styled.p`
    box-sizing: border-box;
    text-align: left;
    text-indent: 1em;
    width: 60%;
    border: 2px dashed #ffffff;
    font-size: 18px;
    line-height: 1.6;
    margin: 20px auto 0;
    padding: 20px;
    span {
        display: inline;
        color: #ff0000;
    }
`;
