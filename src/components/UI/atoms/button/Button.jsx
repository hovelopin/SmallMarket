import React from "react"
import StyledButton from "./style"

const Button = ({ height, width }) => {
    return (
        <StyledButton width={width} height={height}>
            안녕
        </StyledButton>
    )
}

export default Button
