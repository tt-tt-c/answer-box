import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
    onChange: (isChecked: boolean) => void;
    readonly isChecked?: boolean;
};

const Toggle: React.FC<Props> = ({ onChange, isChecked = false }) => {
    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
        onChange(checked);
    }, [checked]);

    return (
        <>
            <Wrapper onClick={() => setChecked(!checked)}>
                <input type="checkbox" checked={checked} />
                <label onClick={() => setChecked(!checked)}>
                    <span></span>
                </label>
                <span onClick={() => setChecked(!checked)}></span>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    cursor: pointer;
    line-height: 56px;
    letter-spacing: 0;
    text-align: center;
    font-size: 20px;
    position: relative;
    margin: 0;
    width: 150px;
    background: rgba(0, 0, 0, 0);
    font-weight: 700;
    input {
        display: none;
    }
    label {
        cursor: pointer;
        display: block;
        box-sizing: border-box;
        height: 60px;
        border: 2px solid #999999;
        border-radius: 30px;
    }
    input:checked + label {
        border-color: #78bd78;
    }

    label span:after {
        content: "OFF";
        padding: 0 0 0 36px;
        color: #999999;
    }
    input:checked + label span:after {
        content: "ON";
        padding: 0 36px 0 0;
        color: #78bd78;
    }
    > span {
        display: block;
        position: absolute;
        width: 52px;
        height: 52px;
        background: #999999;
        top: 4px;
        left: 4px;
        border-radius: 26px;
        transition: 0.2s;
    }
    input:checked ~ span {
        transform: translateX(90px);
        background: #78bd78;
    }
`;

export default Toggle;
