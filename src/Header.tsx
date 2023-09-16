import "./index.css";
import styled from "styled-components";
import ModeToggle from "./ModeToggle";

const H1 = styled.h1`
font-family: Inter;
font-size: 22px;
color: white;
font-weight: 700;
`;

const H3 = styled.h1`
font-family: Inter;
font-size: 12px;
color: #AEB3CB;
font-weight: 700;
align-self: flex-start;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 10% 5% 10%;
`

const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTextContainer>
                <H1>Social Media Dashboard</H1>
                <H3>Total followers: 23,004</H3>
            </HeaderTextContainer>
            <ModeToggle />
        </ HeaderContainer>
    );
};

export default Header