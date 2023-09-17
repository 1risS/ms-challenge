import "./index.css";
import styled from "styled-components";
import OverviewCard from "./OverviewCard";
import facebook from "./assets/icon-facebook.svg"
import instagram from "./assets/icon-instagram.svg"
import twitter from './assets/icon-twitter.svg'
import youtube from './assets/icon-youtube.svg'

const OverviewCardsContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
    border-radius: 5px;
    padding-top: 1em;
`

const overviewCardData = [
    {
        socialLogo: facebook,
        indicator: "Page Views",
        value: 87,
        todayPercentage: 3,
    },
    {
        socialLogo: facebook,
        indicator: "Likes",
        value: 52,
        todayPercentage: -2,
    },
    {
        socialLogo: instagram,
        indicator: "Likes",
        value: 5462,
        todayPercentage: 2257,
    },
    {
        socialLogo: facebook,
        indicator: "Profile Views",
        value: 52000,
        todayPercentage: 1375,
    },
    {
        socialLogo: twitter,
        indicator: "Retweets",
        value: 117,
        todayPercentage: 303,
    },
    {
        socialLogo: twitter,
        indicator: "Likes",
        value: 507,
        todayPercentage: 553,
    },
    {
        socialLogo: youtube,
        indicator: "Likes",
        value: 107,
        todayPercentage: -19,
    },
    {
        socialLogo: youtube,
        indicator: "Total Views",
        value: 1407,
        todayPercentage: -12,
    },
]

const OverviewCardContainer = () => {
    return (
        <OverviewCardsContainer>
            {overviewCardData.map((props, i) =>
                <OverviewCard
                    key={i}
                    {...props}
                ></OverviewCard>
            )}
        </OverviewCardsContainer>

    )
}

export default OverviewCardContainer