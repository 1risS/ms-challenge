import "./index.css";
import styled from "styled-components";
import { devices } from './Theme'
import Card from "./Card";
import facebook from "./assets/icon-facebook.svg"
import instagram from "./assets/icon-instagram.svg"
import twitter from './assets/icon-twitter.svg'
import youtube from './assets/icon-youtube.svg'

const cardData = [
    {
        socialNetworkName: "Facebook",
        socialLogo: facebook,
        userName: "@nathanf",
        followers: 1987,
        todayDiff: 12,
        diff10days: 234,
        borderColor: "linear-gradient(to left, hsl(195, 100%, 50%), hsl(195, 100%, 50%)) ",
        followerName: "followers",
    },
    {
        socialNetworkName: "Twitter",
        socialLogo: twitter,
        userName: "@nathanf",
        followers: 1044,
        todayDiff: 99,
        diff10days: -288,
        borderColor: "linear-gradient(to left, hsl(203, 89%, 53%), hsl(203, 89%, 53%)) ",
        followerName: "followers",
    },
    {
        socialNetworkName: "Instagram",
        socialLogo: instagram,
        userName: "@realnathanf",
        followers: 11000,
        todayDiff: 1099,
        diff10days: 673,
        borderColor: "linear-gradient(to right, #FDC468, #DF4996)",
        followerName: "followers",
    },
    {
        socialNetworkName: "YouTube",
        socialLogo: youtube,
        userName: "Nathan F.",
        followers: 8239,
        todayDiff: -144,
        diff10days: 2,
        borderColor: "linear-gradient(to left, hsl(348, 97%, 39%), hsl(348, 97%, 39%))",
        followerName: "subscribers",
    },
]

const CardsContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3em;

    @media ${devices.mobileL}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media ${devices.mobileM}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media ${devices.mobileS}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }   
`

const CardContainer = () => {
    return (
        <CardsContainer>
            {cardData.map((props, i) =>
                <Card
                    key={i}
                    {...props}
                ></Card>
            )}
        </CardsContainer>

    )
}

export default CardContainer