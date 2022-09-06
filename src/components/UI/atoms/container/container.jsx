import StyledContainer from "./style"

const Container = ({ width, height, display, children }) => {
    return (
        <StyledContainer width={width} height={height} display={display}>
            {children}
        </StyledContainer>
    )
}

export default Container
