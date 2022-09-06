import styled from "styled-components"

const StyledContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => (!props.height ? "auto" : props.height)};
    display: ${(props) => (!props.display ? "block" : props.display)};
`

export default StyledContainer
