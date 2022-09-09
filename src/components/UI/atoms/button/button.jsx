import React from "react"
import * as MyButton from "./style"
import ErrorUtil from "../../../../util/errorUtil"

const Button = ({
    type = "default",
    bType = "button",
    height,
    width,
    value,
    onClickEvent,
}) => {
    const getButtonType = (type) => {
        switch (type) {
            case "default":
                return (
                    <MyButton.StyledButton
                        type={bType}
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
                        type={bType}
                        width={width}
                        height={height}
                        onClick={onClickEvent}
                    >
                        {value}
                    </MyButton.StyledContrastButton>
                )

            case "black":
                return (
                    <MyButton.StyledBlackButton
                        type={bType}
                        width={width}
                        height={height}
                        onClick={onClickEvent}
                    >
                        {value}
                    </MyButton.StyledBlackButton>
                )

            default:
                ErrorUtil.notImplemented()
        }
    }

    return <React.Fragment>{getButtonType(type)}</React.Fragment>
}

export default Button
