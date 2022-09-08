import React from "react"
import * as MyButton from "./style"
import ErrorUtil from "../../../../util/errorUtil"

const Button = ({ type = "default", height, width, value, onClickEvent }) => {
    const getButtonType = (type) => {
        switch (type) {
            case "default":
                return (
                    <MyButton.StyledButton
                        width={width}
                        height={height}
                        onClick={onClickEvent}
                    >
                        {value}
                    </MyButton.StyledButton>
                )

            case "contrast":
                return (
                    <MyButton.StyledContrastButton
                        width={width}
                        height={height}
                        onClick={onClickEvent}
                    >
                        {value}
                    </MyButton.StyledContrastButton>
                )

            default:
                ErrorUtil.notImplemented()
        }
    }

    return <React.Fragment>{getButtonType(type)}</React.Fragment>
}

export default Button
