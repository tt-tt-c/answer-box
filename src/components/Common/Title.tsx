import React from 'react'
import styled from 'styled-components';

const Title:React.FC = ({children}) => {
    return (
        <TitleElm>
            {children}
        </TitleElm>
    )
}

const TitleElm = styled.h1`
    text-align: center;
    font-size: 54px;
    font-weight: 700;
    span {
        font-size: 38px;
        font-weight: 600;
        display: block;
        margin-top: 15px;
    }
`;

export default Title

