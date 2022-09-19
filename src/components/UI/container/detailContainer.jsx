import React, { useCallback } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import DetailInfo from "@components/UI/blocks/detail/detailInfo"
import Theme from "@util/style/theme"

const DetailContainer = () => {
    const location = useLocation()

    const { item } = location.state

    const handlePayButtonClick = useCallback(() => {
        console.log("pay")
    }, [])

    const handleToCartButtonClick = useCallback(() => {
        console.log("toCart")
    }, [])

    const handleQuntityChange = useCallback((e) => {
        const quantity = e.target.value
        console.log(quantity)
    }, [])

    return (
        <DetailMainConetainer>
            <DetailHeadContainer>
                <DetailHeaderFont>Product detail</DetailHeaderFont>
                <DetailHeaderFontContent>
                    With SmallMarket
                </DetailHeaderFontContent>
            </DetailHeadContainer>
            <DetailBodyWrapper>
                <DetailBodyContainer>
                    <DetailImageContainer
                        src={`${process.env.PUBLIC_URL}/img/${item.img}`}
                    />
                </DetailBodyContainer>
                <DetailSideContainer>
                    <DetailInfo
                        detailItem={item}
                        onPayButtonClickEvent={handlePayButtonClick}
                        onToCartButtonClickEvent={handleToCartButtonClick}
                        onQuntityChangeEvent={handleQuntityChange}
                    />
                </DetailSideContainer>
            </DetailBodyWrapper>
        </DetailMainConetainer>
    )
}

const DetailMainConetainer = styled.div`
    width: 100%;
    height: 100%;
`

const DetailHeadContainer = styled.div`
    background-color: ${Theme.colors.darkBlack};
    color: ${Theme.colors.white};
    text-align: left;
    padding: 3rem;
`

const DetailHeaderFont = styled.span`
    font-weight: bold;
    font-size: 4.75rem;
`

const DetailHeaderFontContent = styled.p`
    font-size: 1.75rem;
    color: ${Theme.colors.whiteGray};
`

const DetailBodyWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

const DetailBodyContainer = styled.div`
    width: 30%;
    padding-left: 10rem;
`

const DetailImageContainer = styled.img`
    width: 100%;
`

const DetailSideContainer = styled.div`
    width: 40%;
    padding-right: 10rem;
`

export default DetailContainer
