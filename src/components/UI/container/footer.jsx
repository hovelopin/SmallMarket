import styled from "styled-components"
import Theme from "../../../util/style/theme"

const Footer = () => {
    return (
        <FooterContainer width="100%">
            <FooterText>
                Copyright 2022. Team SmallMarket. All pictures cannot be copied
                without permission.
            </FooterText>
            <FooterSubText>All rights reserved.</FooterSubText>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    background-color: ${Theme.colors.darkBlack};
`

const FooterText = styled.span`
    font-size: 1rem;
    font-weight: ${Theme.fontWeight.thin};
    line-height: 2rem;
    color: ${Theme.colors.silverGray};
`

const FooterSubText = styled.p`
    font-size: 0.92rem;
    font-weight: ${Theme.fontWeight.thin};
    line-height: 2rem;
    color: ${Theme.colors.silverGray};
`

export default Footer
