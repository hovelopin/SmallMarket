import styled from "styled-components"
import Theme from "@util/style/theme"

const StyledInput = styled.input`
    outline: none;
    width: 100%;
    line-height: ${Theme.inputs.lineHeight};
    placeholder: ${(props) => props.placeholder};
    border: ${Theme.inputs.border};
    border-radius: ${Theme.inputs.borderRadius};
    box-sizing: ${Theme.inputs.boxSizing};
    padding: ${Theme.inputs.padding};
    display: ${Theme.inputs.display};
    zoom: ${(props) => props.zoom};
`

export default StyledInput
