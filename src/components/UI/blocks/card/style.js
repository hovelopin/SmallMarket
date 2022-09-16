import styled from "styled-components"
import Theme from "../../../../util/style/theme"

export const StyledCardContainer = styled.div`
    width: 100%;
    position: relative;
    min-width: 0;
    word-wrap: break-word;
    border: 2px solid ${Theme.colors.lightGray};
    border-radius: ${Theme.card.borderRadius};
    background-color: ${Theme.colors.white};
    background-clip: border-box;
    text-align: center;
`
export const StyledCardImage = styled.img`
    width: 100%;
    align-items: center;
    object-fit: cover;
    vertical-align: middle;
`

export const StyledCardBody = styled.div`
    padding: 0.7rem;
    box-sizing: border-box;
`

export const StyledCardFooter = styled.div`
    padding: 1.2rem 4rem 2rem 4rem;
`
