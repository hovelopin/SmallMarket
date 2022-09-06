import StyledGrid from "./style"

const Grid = ({ repeat, axis, children }) => {
    return (
        <StyledGrid repeat={repeat} axis={axis}>
            {children}
        </StyledGrid>
    )
}

export default Grid
