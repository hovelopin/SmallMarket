import React from "react"
import StyledButton from "./style"

const Button = ({ height, width, value, onClickEvent }) => {
    return (
        <StyledButton width={width} height={height} onClick={onClickEvent}>
            {value}
        </StyledButton>
    )
}

export default Button
