import "./index.css";
import styled from "styled-components";
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
`

const Indicator = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-width: 700;
    color: #8B97C6;
    position: absolute;
    top: 20%;
    left: 10%;
`
const SMLogo = styled.img`
    width: 26px;
    height: 26px;
    position: absolute;
    top: 20%;
    right: 10%;
`

const IndicatorValue = styled.div`
    font-family: Inter;
    font-size: 32px;
    color: white;
    font-weight: 700;
    position: absolute;
    bottom: 20%;
    left: 10%;
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
`

const PercentageValue = styled.div<{ $todayPercentage: number }>`
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    color: ${props => (props.$todayPercentage <= 0) ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"} ;
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
