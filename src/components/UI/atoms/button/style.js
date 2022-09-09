import styled from "styled-components"
import Theme from "../../../../util/style/theme"

export const StyledButton = styled.button`
    color: ${Theme.colors.white};
    text-align: center;
    vertical-align: center;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: ${Theme.buttons.borderRadius};
    padding: ${Theme.buttons.padding};
    border: ${Theme.buttons.border};
    background-color: ${Theme.colors.darkRed};
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.medium};
    line-height: 1;
    cursor: pointer;
    &:hover {
        transition 0.3s;
        background-color: ${Theme.colors.white};
        border: 2px solid ${Theme.colors.darkRed};
        color: ${Theme.colors.darkRed};
    }
`

export const StyledContrastButton = styled.button`
    color: ${Theme.colors.darkRed};
    text-align: center;
    vertical-align: center;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: ${Theme.buttons.borderRadius};
    padding: ${Theme.buttons.padding};
    border: 2px solid ${Theme.colors.darkRed};
    background-color: ${Theme.colors.white};
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.medium};
    line-height: 1;
    &:hover {
        transition 0.3s;
        background-color: ${Theme.colors.darkRed};
        border: 2px solid ${Theme.colors.darkRed};
        color: ${Theme.colors.white};
    }
`

export const StyledBlackButton = styled.button`
    color: ${Theme.colors.black};
    text-align: center;
    vertical-align: center;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: ${Theme.buttons.borderRadius};
    padding: ${Theme.buttons.padding};
    border: 2px solid ${Theme.colors.black};
    background-color: ${Theme.colors.white};
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.medium};
    line-height: 1;
    cursor: pointer;
    &:hover {
        transition 0.3s;
        background-color: ${Theme.colors.black};
        border: 2px solid ${Theme.colors.black};
        color: ${Theme.colors.white};
    }
`
