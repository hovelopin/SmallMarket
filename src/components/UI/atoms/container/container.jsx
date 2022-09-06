import StyledContainer from "./style"

const Container = ({ width, display, children }) => {
    return (
        <StyledContainer width={width} display={display}>
            {children}
        </StyledContainer>
    )
}

export default Container
