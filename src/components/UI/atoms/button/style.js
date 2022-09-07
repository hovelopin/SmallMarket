import styled from "styled-components"
import Theme from "../../../../util/style/theme"

const StyledButton = styled.button`
    color: #fff;
    text-align: center;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: ${Theme.buttons.borderRadius};
    padding: ${Theme.buttons.padding};
    border: ${Theme.buttons.border};
    background-color: ${Theme.buttons.background};
    font-size: ${Theme.fontSizes.default};
    font-weight: ${Theme.fontWeight.medium};
    cursor: pointer;
`

export default StyledButton
