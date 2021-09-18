import styled from "styled-components";
import { Footer, Header } from "./";

const GameLayout: React.FC = ({ children }) => {
    return (
        <>
            <Header/>
            <MainWrapper> {children}</MainWrapper>
            <Footer />
        </>
    );
};

const MainWrapper = styled.main`
    box-sizing: border-box;
    margin: 90px 0 180px;
    padding: 10px calc(50% - 540px) 50px;
    min-height: calc(100vh - 270px);
`;

export default GameLayout;
