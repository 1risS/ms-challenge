import "./index.css";
import styled from "styled-components";
import { devices } from "./Theme"

const OverviewHeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 3em;

@media ${devices.mobileL}{
    margin-left: 2em;
}
`

const H2 = styled.h2`
font-family: Inter;
font-size: 24px;
color: white;
font-weight: 700;
margin:0;
`


const OverviewHeader = () => {
    return (
        <OverviewHeaderContainer>
            <H2>Overview - Today </H2>
        </ OverviewHeaderContainer>
    );
};

export default OverviewHeader