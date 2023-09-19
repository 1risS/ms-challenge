import "./index.css";
import styled from "styled-components";
import { devices, primary } from './Theme'
import arrowUp from './assets/icon-up.svg'
import arrowDown from './assets/icon-down.svg'
import Modal from './Modal'
import { useState } from 'react'
import IndicatorValue from "./IndicatorValue";

const CardContainer = styled.div<{ $borderColor: string }>`
    width: 326px;
    height: 277px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.cardBg};
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
    border-top: 6px solid transparent;
    border-image: ${props => props.$borderColor};
    border-image-slice: 1;
    margin-top: 3em;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.cardBgHover}
    }

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
    color: ${({ theme }) => theme.textColor2};
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

const Followers = styled.div`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor2};
    text-transform: uppercase;
    letter-spacing: 0.3em;

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
    color: ${props => (props.$todayDiff <= 0) ? primary.primaryRed : primary.primaryGreen} ;

    @media ${devices.tablet}{
        font-size: 10px;
    }
    @media ${devices.mobileL}{
        font-size: 14px;
    }
`

const StyledFollowerNumber = styled(IndicatorValue)`
font-family: Inter;
font-size: 54px;
color: ${({ theme }) => theme.textColor1};
font-weight: 700;

@media ${devices.tablet}{
    font-size: 50px;
}
@media ${devices.mobileL}{
    font-size: 54px;
}
`
export interface ICardProps {
    socialNetworkName: string;
    socialLogo: string;
    userName: string;
    followers: number;
    todayDiff: number;
    diff10days: number;
    borderColor: string;
    followerName: string;
}

const Card = ({ socialNetworkName, socialLogo, userName, followers, todayDiff, diff10days, borderColor, followerName }: ICardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <CardContainer $borderColor={borderColor} onClick={() => setIsModalOpen(true)}>
            <Modal isOpen={isModalOpen} onClose={(e) => {
                e.stopPropagation()
                setIsModalOpen(false)
            }}
                socialNetworkName={socialNetworkName}
                socialLogo={socialLogo}
                userName={userName}
                followers={followers}
                todayDiff={todayDiff}
                followerName={followerName}
                diff10days={diff10days} />
            <UserContainer>
                <SMLogo src={socialLogo}></SMLogo>
                <UserName> {userName} </UserName>
            </UserContainer>
            <FollowersContainer>
                <StyledFollowerNumber>{followers}</StyledFollowerNumber>
                <Followers>{followerName}</Followers>
            </FollowersContainer>
            <TodayContainer>
                <TodayArrow src={(todayDiff > 0) ? arrowUp : arrowDown}></TodayArrow>
                <Today $todayDiff={todayDiff}> {Math.abs(todayDiff)} Today </Today>
            </TodayContainer>

        </CardContainer>
    );
};

export default Card