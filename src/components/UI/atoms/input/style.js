import styled from "styled-components"
import Theme from "../../../../util/style/theme"

const StyledInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    placeholder: ${(props) => props.placeholder};
    border: ${Theme.inputs.border};
    border-radius: ${Theme.inputs.borderRadius};
    box-sizing: ${Theme.inputs.boxSizing};
    display: ${Theme.inputs.display};
`

export default StyledInput
