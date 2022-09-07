import styled from "styled-components"
import Theme from "../../../../util/style/theme"

const StyledButton = styled.button`
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
`

export default StyledButton
