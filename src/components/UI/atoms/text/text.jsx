import React from "react"
import * as StyledText from "./style"
import ErrorUtil from "@util/errorUtil"

const Text = ({ type = "default", context }) => {
    const getTextType = (type) => {
        switch (type) {
            case "small":
                return (
                    <StyledText.StyledSmallText>
                        {context}
                    </StyledText.StyledSmallText>
                )

            case "default":
                return (
                    <StyledText.StyledDefaultText>
                        {context}
                    </StyledText.StyledDefaultText>
                )

            case "large":
                return (
                    <StyledText.StyledLargeText>
                        {context}
                    </StyledText.StyledLargeText>
                )

            default:
                ErrorUtil.notImplemented()
        }
    }

    return <React.Fragment>{getTextType(type, context)}</React.Fragment>
}

export default Text
