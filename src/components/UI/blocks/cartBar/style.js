import styled from "styled-components"
import Theme from "../../../../util/style/theme"

export const StyledCartContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: ${Theme.colors.white};
    border-radius: 0.35rem;
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
    margin: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

export const StyledCartImg = styled.img`
    width: 100%;
`

export const StyledCartContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const StyledCartCount = styled.div`
    text-align: center;
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.bold};
`

export const StyledCartIcon = styled.div`
    text-align: center;
    font-size: ${Theme.fontSizes.large};
`
