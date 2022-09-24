import React, { useState, useCallback } from "react"
import { useHistory, useLocation } from "react-router-dom"
import useModal from "@/hooks/useModal"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import DetailInfo from "@components/UI/blocks/detail/detailInfo"
import Modal from "@components/UI/blocks/modal/modal"
import Theme from "@util/style/theme"
import AuthService from "@/service/authService"
import CartService from "@/service/cartService"

const DetailContainer = () => {
    const [modalMsg, setModalMsg] = useState("")
    const [quantity, setQuantity] = useState(1)

    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const authState = AuthService.firebaseCurrentUserReuqest()
    const location = useLocation()
    const history = useHistory()

    const { item } = location.state

    const handlePayButtonClick = useCallback(() => {
        if (!authState) {
            setModalMsg("Login please")
            handleOpenButtonClick(true)
            return
        }
        history.push({
            pathname: `/payment/${authState.uid}`,
            state: {
                ...item,
                quantity: quantity === 1 ? 1 : quantity,
            },
        })
    }, [])

    const handleCartButtonClick = useCallback(async () => {
        if (!authState) {
            setModalMsg("Login please")
            handleOpenButtonClick(true)
            return
        }
        const res = await CartService.firebaseAddToCartRequeset(
            item,
            authState.uid,
            quantity
        )
        if (!res) {
            setModalMsg("The item is already exist your cart")
            handleOpenButtonClick(true)
            return
        }
    }, [])

    const handleQuntityChange = useCallback((e) => {
        const quantity = parseInt(e.target.value)
        setQuantity(quantity)
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
                    <DetailImageContainer src={item.img} />
                </DetailBodyContainer>
                <DetailSideContainer>
                    <DetailInfo
                        detailItem={item}
                        onPayButtonClickEvent={handlePayButtonClick}
                        onCartButtonClickEvent={handleCartButtonClick}
                        onQuntityChangeEvent={handleQuntityChange}
                    />
                </DetailSideContainer>
            </DetailBodyWrapper>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <StyledImgContainer
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                />
                <Text type="large" context={modalMsg} />
            </Modal>
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

const StyledImgContainer = styled.img`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
`

export default DetailContainer
