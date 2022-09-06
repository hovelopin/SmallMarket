import styled from "styled-components"

const StyledContainer = styled.div`
    width: ${(props) => props.width};
    display: ${(props) => (!props.display ? "block" : props.display)};
`

export default StyledContainer
