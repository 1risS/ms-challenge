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
        socialLogo: facebook,
        userName: "@nathanf",
        followers: 1987,
        todayDiff: 12,
        borderColor: "linear-gradient(to left, hsl(195, 100%, 50%), hsl(195, 100%, 50%)) ",
    },
    {
        socialLogo: twitter,
        userName: "@nathanf",
        followers: 1044,
        todayDiff: 99,
        borderColor: "linear-gradient(to left, hsl(203, 89%, 53%), hsl(203, 89%, 53%)) ",
    },
    {
        socialLogo: instagram,
        userName: "@realnathanf",
        followers: 11000,
        todayDiff: 1099,
        borderColor: "linear-gradient(to right, #FDC468, #DF4996)",
    },
    {
        socialLogo: youtube,
        userName: "Nathan F.",
        followers: 8239,
        todayDiff: -144,
        borderColor: "linear-gradient(to left, hsl(348, 97%, 39%), hsl(348, 97%, 39%))",
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