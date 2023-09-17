import "./index.css";
import styled from "styled-components";
import { devices } from './Theme'

const AppContainer = styled.div`
    margin: auto;
    
    @media ${devices.desktop} {
        max-width: 1440px;
    }
    @media ${devices.laptopL}{
        max-width: 1440px;
    }
    @media ${devices.laptop} {
        max-width: 1024px;
    }
    @media ${devices.tablet}{
        max-width: 768px;
    }
    @media ${devices.mobileL}{
        max-width: 425px;
    }
    @media ${devices.mobileM}{
        max-width: 375px;
    }
    @media ${devices.mobileS}{
        max-width: 320px;
    }    
`

export default AppContainer