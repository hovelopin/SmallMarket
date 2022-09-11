import { Link } from "react-router-dom"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"

const NotFound = () => {
    return (
        <StyledContainer>
            <Container>
                <StyledFont>
                    <StyledSpan>4</StyledSpan>
                    <StyledSpan>0</StyledSpan>
                    <StyledSpan>4</StyledSpan>
                </StyledFont>
            </Container>
            <StyledContent>
                we are sorry, but the page you requested was not found
            </StyledContent>
            <StyledLink to="/">GO BACK</StyledLink>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    text-align: center;
`

const StyledFont = styled.h1`
    margin-top: -2rem;
    margin-bottom: 2rem;
    color: #262626;
    letter-spacing: -40px;
    margin-left: -20px;
    font-size: 260px;
    font-weight: 900;
`

const StyledSpan = styled.span`
    text-shadow: -8px 0px 0px #fff;
`

const StyledContent = styled.h2`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
    margin-top: -50px;
`

const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: underline;
    color: #262626;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2rem;
`

export default NotFound
