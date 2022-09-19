import styled from "styled-components"
import Grid from "@components/UI/atoms/grid/grid"
import Theme from "@util/style/theme"

const ContactContainer = () => {
    const contactItems = [
        {
            img: "foxmon.PNG",
            alt: "foxmon",
            name: "FoxMon",
            subtitle: "Frontend developer",
            description: "The Team SmallMarket's Frontend engineer",
            email: "foxmon1524@gmail.com",
        },
        {
            img: "leo.png",
            alt: "leo",
            name: "Leo",
            subtitle: "Frontend developer",
            description: "The Team SmallMarket's Frontend engineer",
            email: "vpvm96@gmail.com",
        },
        {
            img: "velo.PNG",
            alt: "velo",
            name: "Velo",
            subtitle: "Frontend developer",
            description: "The Team SmallMarket's Frontend engineer",
            email: "jhpark4884@gmail.com",
        },
        {
            img: "foxmon.PNG",
            alt: "foxmon",
            name: "FoxMon4",
            subtitle: "Frontend developer",
            description: "The Team SmallMarket's Frontend engineer",
            email: "foxmon1524@gmail.com",
        },
    ]

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledIHeaderFont>About Us Page</StyledIHeaderFont>
                <StyledIHeaderFontContent>
                    The Team SmallMarket
                </StyledIHeaderFontContent>
                <StyledIHeaderFontContent>
                    We have our design patterns. We pray for a fair world.
                </StyledIHeaderFontContent>
            </StyledHeader>
            <StyledTeamTitleContainer>
                <StyledTemaTitle>THE TEAM SMALLMARKET</StyledTemaTitle>
            </StyledTeamTitleContainer>
            <StyledGridContainer>
                <Grid repeat={4} axis="column" gap="3rem">
                    {contactItems.map((c) => (
                        <StyledColumnContainer key={c.name}>
                            <StyledCard>
                                <StyledImg
                                    src={`${process.env.PUBLIC_URL}/img/${c.img}`}
                                    alt={c.alt}
                                />
                                <StyledCardContainer>
                                    <StyledTitle>{c.name}</StyledTitle>
                                    <StyledSubtitle>
                                        {c.subtitle}
                                    </StyledSubtitle>
                                    <StyledDescription>
                                        {c.description}
                                    </StyledDescription>
                                    <StyledDescription>
                                        {c.email}
                                    </StyledDescription>
                                    <StyledButtonContainer>
                                        <StyledLink href={`mailto:${c.email}`}>
                                            Contact
                                        </StyledLink>
                                    </StyledButtonContainer>
                                </StyledCardContainer>
                            </StyledCard>
                        </StyledColumnContainer>
                    ))}
                </Grid>
            </StyledGridContainer>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
`

const StyledHeader = styled.div`
    background-color: ${Theme.colors.darkBlack};
    color: ${Theme.colors.white};
    text-align: center;
    padding: 3rem;
`

const StyledIHeaderFont = styled.span`
    font-weight: bold;
    font-size: 4.75rem;
`

const StyledIHeaderFontContent = styled.p`
    font-size: 1.25rem;
    color: ${Theme.colors.whiteGray};
`

const StyledTeamTitleContainer = styled.div`
    width: 100%;
    text-align: center;
`

const StyledTemaTitle = styled.h1`
    font-size: 4rem;
`

const StyledGridContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`

const StyledColumnContainer = styled.div`
    width: 100%;
    display: grid;
    margin-bottom: 1rem;
    padding: 0 8px;
`

const StyledCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const StyledImg = styled.img`
    width: 100%;
`

const StyledTitle = styled.h2`
    font-weight: bold;
    font-size: 2rem;
`

const StyledSubtitle = styled.p`
    color: ${Theme.colors.lightBlack};
    font-size: 1.25rem;
`

const StyledDescription = styled.p`
    color: ${Theme.colors.darkBlack};
    font-weight: ${Theme.fontWeight.bold};
`

const StyledCardContainer = styled.div`
    padding: 0 16px;
`

const StyledButtonContainer = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
`

const StyledLink = styled.a`
    text-decoration: none;
    display: inline-block;
    width: 85%;
    color: ${Theme.colors.darkRed};
    background-color: ${Theme.colors.white};
    vertical-align: center;
    text-align: center;
    border-radius: ${Theme.buttons.borderRadius};
    border: 2px solid ${Theme.colors.darkRed};
    padding: ${Theme.buttons.padding};
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.medium};
    line-height: 1;
    cursor: pointer;
    &:hover {
        transition: 0.3s;
        background-color: ${Theme.colors.darkRed};
        border: 2px solid ${Theme.colors.darkRed};
        color: ${Theme.colors.white};
    }
`

export default ContactContainer
