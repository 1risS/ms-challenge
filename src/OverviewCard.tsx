import "./index.css";
import styled from "styled-components";
import { devices } from "./Theme";
import arrowUp from './assets/icon-up.svg'
import arrowDown from './assets/icon-down.svg'

interface OverviewCardProps {
    socialLogo: string;
    indicator: string;
    value: number;
    todayPercentage: number;
}

const OverviewCardContainer = styled.div`
    width: 326px;
    height: 159px;
    display: flex;
    flex-direction: column;
    background-color: #252A41;
    margin-bottom: 3%;
    justify-content: center;
    align-items: space-evenly;
    position: relative;
    border-radius: 5px;

    @media ${devices.laptop} {
        width: 235px;
        height: 114px;
    }
    @media ${devices.tablet}{
        width: 187px;
        height: 91px;
    }
    @media ${devices.mobileL}{
        height: 114px;
        width: 85%;
        margin-bottom: 3%;
    }
    @media ${devices.mobileS}{
        width: 80%;
    }
`

const Indicator = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-width: 700;
    color: #8B97C6;
    position: absolute;
    top: 20%;
    left: 10%;

    @media ${devices.tablet}{
        font-size: 12px;
    }
    @media ${devices.mobileL}{
        font-size: 16px;
    }
`
const SMLogo = styled.img`
    width: 26px;
    height: 26px;
    position: absolute;
    top: 20%;
    right: 10%;

    @media ${devices.tablet}{
        width: 24px;
        height: 24px;
    }
`

const IndicatorValue = styled.div`
    font-family: Inter;
    font-size: 32px;
    color: white;
    font-weight: 700;
    position: absolute;
    bottom: 20%;
    left: 10%;

    @media ${devices.tablet}{
        font-size: 26px;
    }
    @media ${devices.mobileL}{
        font-size: 32px;
    }
`

const PercentageValueContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 20%;
    right: 10%;
`

const PercentageArrow = styled.img`
    width: 8px;
    height: 4px;
    padding-right: 0.125em;

    @media ${devices.tablet}{
        width: 6px;
        height: 4px;
    }
    @media ${devices.mobileL}{
        width: 8px;
        height: 4px;
    }
`

const PercentageValue = styled.div<{ $todayPercentage: number }>`
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    color: ${props => (props.$todayPercentage <= 0) ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"} ;

    @media ${devices.tablet}{
        font-size: 12px;
    }
    @media ${devices.mobileL}{
        font-size: 14px;
    }
`

const OverviewCard = ({ socialLogo, indicator, value, todayPercentage }: OverviewCardProps) => {
    return (
        <OverviewCardContainer>
            <Indicator> {indicator} </Indicator>
            <SMLogo src={socialLogo} />
            <IndicatorValue>{value}</IndicatorValue>
            <PercentageValueContainer>
                <PercentageArrow src={(todayPercentage > 0) ? arrowUp : arrowDown} />
                <PercentageValue $todayPercentage={todayPercentage}> {Math.abs(todayPercentage)} % </ PercentageValue>
            </PercentageValueContainer>
        </OverviewCardContainer>
    );
};

export default OverviewCard
