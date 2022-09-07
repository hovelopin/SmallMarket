import React from "react"
import StyledButton from "./style"

const Button = ({ height, width, value }) => {
    return (
        <StyledButton width={width} height={height}>
            {value}
        </StyledButton>
    )
}

export default Button
