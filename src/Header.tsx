import "./index.css";
import styled from "styled-components";
import { devices } from './Theme'
import ModeToggle from "./ModeToggle";

const H1 = styled.h1`
font-family: Inter;
font-size: 28px;
color: ${({ theme }) => theme.textColor1};
font-weight: 700;
margin:0;

@media ${devices.tablet}{
    font-size: 26px;
}
@media ${devices.mobileL}{
    font-size: 28px;
    text-align: left;
}
`;

const H3 = styled.h3`
font-family: Inter;
font-size: 14px;
color:${({ theme }) => theme.textColor2};
font-weight: 700;
align-self: flex-start;
margin: 0;

@media ${devices.tablet}{
    font-size: 12px;
}
@media ${devices.mobileL}{
    font-size: 14px;
    text-align: left;
}
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2em;
`

const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${devices.mobileL}{
        margin: 1.5em 0em 0em 1.5em;
    }
`

const Header = ({ onChange }: { onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return (
        <HeaderContainer>
            <HeaderTextContainer>
                <H1>Social Media Dashboard</H1>
                <H3>Total followers: 23,004</H3>
            </HeaderTextContainer>
            <ModeToggle onChange={onChange} />
        </ HeaderContainer>
    );
};

export default Header