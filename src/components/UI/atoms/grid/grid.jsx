import StyledGrid from "./style"

const Grid = ({ repeat, axis, bgColor, color, children }) => {
    return (
        <StyledGrid repeat={repeat} axis={axis} bgColor={bgColor} color={color}>
            {children}
        </StyledGrid>
    )
}

export default Grid
