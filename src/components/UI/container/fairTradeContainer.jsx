import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Button from "@components/UI/atoms/button/button"
import Theme from "@util/style/theme"

const FairTradeContainer = () => {
    const history = useHistory()

    const handleShoppingButtonClick = () => {
        history.push("/items")
    }

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledIHeaderFont>Fair trade</StyledIHeaderFont>
                <StyledIHeaderFontContent>
                    Fairtrade is the most recognized and trusted sustainability
                    label in the world.
                </StyledIHeaderFontContent>
                <StyledIHeaderFontContent>
                    We are a global organization that is co-owned by more than
                    1.8 million farmers and workers who earn fairer prices,
                    build stronger communities, and have control over their
                    futures.
                </StyledIHeaderFontContent>
            </StyledHeader>
            <StyledContentContainer>
                <StyledImgContainer>
                    <StyledImg
                        src={`${process.env.PUBLIC_URL}/img/fair_trade.jpg`}
                    />
                </StyledImgContainer>
                <StyledTextContainer>
                    <Container>
                        <StyledContentHeader>The</StyledContentHeader>
                    </Container>
                    <Container>
                        <StyledContentHeader>SmallMarket</StyledContentHeader>
                    </Container>
                    <Container width="100%">
                        <StyledContentContent>
                            Fairtrade is the most recognized and trusted
                            sustainability label in the world.
                        </StyledContentContent>
                        <StyledContentContent>
                            We are a global organization that is co-owned by
                            more than 1.8 million farmers and workers who earn
                            fairer prices, build stronger communities, and have
                            control over their futures.
                        </StyledContentContent>
                        <StyledContentContent>
                            Fairtrade's approach enables farmers and workers to
                            have more control over their lives and decide how to
                            invest in their future.
                        </StyledContentContent>
                        <StyledContentContent>
                            As a leader in the global movement to make trade
                            fair, Fairtrade supports and challenges businesses
                            and governments and connects farmers and workers
                            with the people who buy their products.
                        </StyledContentContent>
                        <StyledContentContent>
                            Farmers and workers have a strong voice at every
                            level of Fairtrade, from how they invest in and run
                            their local organizations to having an equal say in
                            Fairtrade’s global decision-making.
                        </StyledContentContent>
                        <StyledButtonContainer>
                            <Button
                                type="contrast"
                                bType="button"
                                width="100%"
                                value="Try shopping"
                                onClickEvent={handleShoppingButtonClick}
                            />
                        </StyledButtonContainer>
                    </Container>
                </StyledTextContainer>
            </StyledContentContainer>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    margin-bottom: -4px;
`

const StyledHeader = styled.div`
    background-color: ${Theme.colors.darkBlack};
    color: ${Theme.colors.white};
    text-align: left;
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

const StyledContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledImgContainer = styled.div`
    width: 80%;
    justify-content: center;
`

const StyledImg = styled.img`
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`

const StyledTextContainer = styled.div`
    width: 20%;
    padding-left: 1rem;
    padding-right: 1rem;
`

const StyledContentHeader = styled.span`
    font-weight: bold;
    font-size: 2.75rem;
`

const StyledContentContent = styled.span`
    display: block;
    margin-top: 1rem;
    font-size: 1rem;
`

const StyledButtonContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`

export default FairTradeContainer
