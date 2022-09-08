import styled from "styled-components"
import Theme from "../../../../util/style/theme"

export const StyledSelect = styled.select`
    width: 100%;
    padding: ${Theme.inputs.padding};
    border: ${Theme.selects.border};
    border-radius: ${Theme.selects.borderRadius};
    line-height: ${Theme.inputs.lineHeight};
    box-sizing: ${Theme.selects.boxSizing};
    display: ${Theme.inputs.display};
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.bold};
    text-align: ${Theme.selects.textAlign};
    transition: 0.5s;
    &:hover {
        color: ${Theme.colors.white};
        background-color: ${Theme.colors.black};
        cursor: pointer;
    }
`

export const StyledOption = styled.option`
    width: 100%;
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.bold};
    background-color: ${Theme.colors.black};
    color: ${Theme.colors.white};
`
