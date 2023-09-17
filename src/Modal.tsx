import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme, primary, devices } from './Theme';
import xIcon from "./assets/x-icon.svg"
import fb from "./assets/icon-facebook.svg"
import arrowUp from "./assets/icon-up.svg"
import arrowDown from "./assets/icon-down.svg"
import IndicatorValue from "./IndicatorValue";
import IndicatorChart from "./IndicatorChart";

interface IModalProps {
    isOpen: boolean;
    onClose: (event: any) => void;
    socialNetworkName: string;
    socialLogo: string;
    userName: string;
    followers: number;
    todayDiff: number;
    diff10days: number;
    followerName: string;
}

const ModalBackgroundStyled = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const ModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background:  ${({ theme }) => theme.cardBg};
    border-radius: 23px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    min-width: 30rem;
    z-index: 2;
    width: 80%;
    height: 500px;
`;

const ModalHeader = styled.h1`
font-family: Inter;
font-size: 28px;
color: ${({ theme }) => theme.textColor1};
text-align: left;
font-weight: 700;
margin:4rem 4rem 1rem 4rem;
display: flex;
flex-direction: row;
justify-content: space-between;

@media ${devices.tablet}{
    font-size: 26px;
}
@media ${devices.mobileL}{
    font-size: 28px;
    text-align: left;
}
`;

const CloseButtonStyled = styled.img`
    height: 17px;
    width: 17px;
    // position: absolute;
    color: ${({ theme }) => theme.textColor1};
    top: 2em;
    right: 2em;
    z-index: 1;
    &:hover {
        cursor: pointer;
    }
`;



const ModalContainer = styled.div`
    cursor: default;
`

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 4em;
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

const MetricsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 4rem 0rem 4rem;
`

const TotalFollowersNumber = styled(IndicatorValue)`
    font-family: Inter;
    font-size: 54px;
    color: ${({ theme }) => theme.textColor1};
    font-weight: 700;
    margin: 0;

    @media ${devices.tablet}{
        font-size: 50px;
    }
    @media ${devices.mobileL}{
        font-size: 54px;
    }
`

const TotalFollowersLabel = styled.div`
    font-family: Inter;
    font-size: 15px;
    text-align: left;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor1};
    width: 80px;
    margin-left: 0.5rem;
`

const NewFollowers10Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 2rem;
`

const NFArrow = styled.img`
    width: 14px;
    height: 8px;
    margin-right: 0.5rem;
`
const NF10daysValue = styled.div<{ $value: number }>`
    font-family: Inter;
    font-size: 54px;
    text-align: left;
    font-weight: 700;
    color: ${({ $value }) => $value > 0 ? primary.primaryGreen : primary.primaryRed};
`
const NF10daysTxt = styled.h3`
    font-family: Inter;
    font-size: 15px;
    text-align: left;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor1};
    width: 140px;
    margin-left: 0.5rem;
`

const NewFollowersTodayContainer = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 2rem;
`

const NFTodayValue = styled.div<{ $value: number }>`    
    font-family: Inter;
    font-size: 54px;
    text-align: left;
    font-weight: 700;
    color: ${({ $value }) => $value > 0 ? primary.primaryGreen : primary.primaryRed};
`

const NFTodayText = styled.h3`
    font-family: Inter;
    font-size: 15px;
    text-align: left;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor1};
    width: 140px;
    margin-left: 0.5rem;
`

const Modal = ({ isOpen, onClose, socialNetworkName, socialLogo, userName, followers, todayDiff, diff10days, followerName }: IModalProps) => {

    if (!isOpen) {
        return null;
    }

    const newFollowers10days = 81;
    // const newFollowersToday = 12;

    return (
        <ModalContainer>
            <ModalStyled>
                <ModalHeader>
                    {socialNetworkName} {followerName}
                    <CloseButtonStyled src={xIcon} onClick={(e) => onClose(e)} />
                </ModalHeader>
                <UserContainer>
                    <SMLogo src={socialLogo}></SMLogo>
                    <UserName>{userName}</UserName>
                </UserContainer>
                <MetricsContainer>
                    <TotalFollowersNumber>{followers}</TotalFollowersNumber>
                    <TotalFollowersLabel>Total {followerName}</TotalFollowersLabel>
                    <NewFollowers10Container>
                        {/* <NFArrow src={(newFollowers > 0) ? arrowUp : arrowDown}></NFArrow> */}
                        <NFArrow src={(diff10days > 0) ? arrowUp : arrowDown}></NFArrow>
                        <NF10daysValue $value={diff10days}>
                            {Math.abs(diff10days)}
                        </NF10daysValue>
                        <NF10daysTxt>New {followerName} in the past 10 days</NF10daysTxt>
                    </NewFollowers10Container>
                    <NewFollowersTodayContainer>
                        <NFArrow src={(todayDiff > 0) ? arrowUp : arrowDown}></NFArrow>
                        <NFTodayValue $value={todayDiff}>
                            {Math.abs(todayDiff)}
                        </NFTodayValue>
                        <NFTodayText>New {followerName} TODAY</NFTodayText>
                    </NewFollowersTodayContainer>
                </MetricsContainer>
                <IndicatorChart />
            </ModalStyled>
            <ModalBackgroundStyled />
        </ModalContainer>
    );
};

export default Modal