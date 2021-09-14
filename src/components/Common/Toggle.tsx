import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
    onChange: (isChecked: boolean) => void;
    readonly isChecked: boolean;
    isDisabled: boolean;
};

const Toggle: React.FC<Props> = ({
    onChange,
    isChecked,
    isDisabled = false,
}) => {
    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    return (
        <>
            <Wrapper
                onClick={() => {
                    const nextChecked = !checked;
                    setChecked(nextChecked);
                    onChange(nextChecked);
                }}
                isButtonChecked={checked}
                disabled={isDisabled}
            >
                <label>
                    <span></span>
                </label>
                <span></span>
            </Wrapper>
        </>
    );
};

const toggleParams = {
    color: {
        on: "#78bd78",
        off: "#999",
    },
    text: {
        on: "ON",
        off: "OFF",
    },
};

const Wrapper = styled.button<{ isButtonChecked: boolean }>`
    cursor: pointer;
    outline: none;
    border: 0;
    line-height: 56px;
    letter-spacing: 0;
    text-align: center;
    font-size: 20px;
    position: relative;
    margin: 0;
    padding: 0;
    width: 150px;
    background: rgba(0, 0, 0, 0);
    font-weight: 700;
    label {
        cursor: pointer;
        display: block;
        box-sizing: border-box;
        height: 60px;
        border: 2px solid #999999;
        border-radius: 30px;
        border-color: ${({ isButtonChecked: isChecked }) =>
            isChecked
                ? `${toggleParams.color.on}`
                : `${toggleParams.color.off}`};
    }

    label span:after {
        content: "${({ isButtonChecked: isChecked }) =>
            isChecked
                ? `${toggleParams.text.on}`
                : `${toggleParams.text.off}`}";    
        padding: ${({ isButtonChecked: isChecked }) =>
            isChecked ? `0 36px 0 0` : `0 0 0 36px`};
        color: ${({ isButtonChecked: isChecked }) =>
            isChecked
                ? `${toggleParams.color.on}`
                : `${toggleParams.color.off}`};
    }
    > span {
        display: block;
        position: absolute;
        width: 52px;
        height: 52px;
        background: ${({ isButtonChecked: isChecked }) =>
            isChecked
                ? `${toggleParams.color.on}`
                : `${toggleParams.color.off}`};
        top: 4px;
        left: 4px;
        border-radius: 26px;
        transition: 0.2s;
        transform: ${({ isButtonChecked: isChecked }) =>
            isChecked ? `translateX(90px)` : ``};
    }
`;

export default Toggle;
