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
    margin: 90px 0 180px;
    padding: 10px calc(50% - 540px) 50px;
`;

export default GameLayout;
