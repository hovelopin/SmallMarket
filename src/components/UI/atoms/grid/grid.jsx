import StyledGrid from "./style"

const Grid = ({
    repeat,
    axis,
    gap,
    bgColor,
    color,
    border,
    shadow,
    children,
}) => {
    return (
        <StyledGrid
            repeat={repeat}
            axis={axis}
            gap={gap}
            bgColor={bgColor}
            color={color}
            border={border}
            shadow={shadow}
        >
            {children}
        </StyledGrid>
    )
}

export default Grid
