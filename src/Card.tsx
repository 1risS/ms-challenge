import "./index.css";
import styled from "styled-components";
import { devices } from './Theme'
import arrowUp from './assets/icon-up.svg'
import arrowDown from './assets/icon-down.svg'

const CardContainer = styled.div<{ $borderColor: string }>`
    width: 326px;
    height: 277px;
    display: flex;
    flex-direction: column;
    background-color: #252A41;
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
    border-top: 6px solid transparent;
    border-image: ${props => props.$borderColor};
    border-image-slice: 1;

    @media ${devices.laptop} {
        width: 235px;
        height: 199px;
    }
    @media ${devices.tablet}{
        width: 187px;
        height: 159px;
    }
    @media ${devices.mobileL}{
        height: 250px;
        width: 85%;
        margin-bottom: 5%;
    }
    @media ${devices.mobileM}{
        width: 85%;
    }
    @media ${devices.mobileS}{
        width: 80%;
    }
`

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SMLogo = styled.img`
    width: 26px;
    height: 26px;
`

const UserName = styled.div`
    font-family: Inter;
    font-size: 14px;
    color: #AEB3CB;
    font-weight: 700;
    margin-left: 0.5em;

    @media ${devices.tablet}{
        font-size: 12px;
    }
    @media ${devices.mobileL}{
        font-size: 14px;
    }
`

const FollowersContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function FollowerNumber({ className, children }: any) {
    let value = children;

    if (value > 10000) {
        value = `${value / 1000}K`
    }
    return (
        <div className={className}>{value}</div>
    )
}

const StyledFollowerNumber = styled(FollowerNumber)`
    font-family: Inter;
    font-size: 54px;
    color: white;
    font-weight: 700;

    @media ${devices.tablet}{
        font-size: 50px;
    }
    @media ${devices.mobileL}{
        font-size: 54px;
    }
`

const Followers = styled.div`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: #AEB3CB;
    text-transform: uppercase;

    @media ${devices.tablet}{
        font-size: 10px;
    }
    @media ${devices.mobileL}{
        font-size: 14px;
    }
`

const TodayContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const TodayArrow = styled.img`
    width: 8px;
    height: 4px;
    padding-right: 0.25em;
`

const Today = styled.div<{ $todayDiff: number }>`
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    color: ${props => (props.$todayDiff <= 0) ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"} ;

    @media ${devices.tablet}{
        font-size: 10px;
    }
    @media ${devices.mobileL}{
        font-size: 14px;
    }
`
interface CardProps {
    socialLogo: string;
    userName: string;
    followers: number;
    todayDiff: number;
    borderColor: string;
}


const Card = ({ socialLogo, userName, followers, todayDiff, borderColor }: CardProps) => {
    return (
        <CardContainer $borderColor={borderColor}>
            <UserContainer>
                <SMLogo src={socialLogo}></SMLogo>
                <UserName> {userName} </UserName>
            </UserContainer>
            <FollowersContainer>
                <StyledFollowerNumber>{followers}</StyledFollowerNumber>
                <Followers>followers</Followers>
            </FollowersContainer>
            <TodayContainer>
                <TodayArrow src={(todayDiff > 0) ? arrowUp : arrowDown}></TodayArrow>
                <Today $todayDiff={todayDiff}> {Math.abs(todayDiff)} Today </Today>
            </TodayContainer>

        </CardContainer>
    );
};

export default Card