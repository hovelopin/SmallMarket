import React from "react"
import styled from "styled-components"
import Text from "@/components/UI/atoms/text/text"
import Theme from "@/util/style/theme"

const MyPageSellerOrderList = ({ sellerMenuMove, onSellerMenuClickEvent }) => {
    return (
        <MyPageSellerMainContainer>
            <MyPageSellerHeader>
                <Text type="large" context="Product registration" />
            </MyPageSellerHeader>
            <MyPageProductMenuBar>
                <MyPageSellerMenuTab>
                    {["Sales list", "Sold list"].map((m) => {
                        return (
                            <MyPageSellerMenuList
                                key={m}
                                onClick={onSellerMenuClickEvent(m)}
                            >
                                <Text type="default" context={m} />
                            </MyPageSellerMenuList>
                        )
                    })}
                </MyPageSellerMenuTab>
            </MyPageProductMenuBar>
            {sellerMenuMove()}
        </MyPageSellerMainContainer>
    )
}

const MyPageSellerMainContainer = styled.div`
    width: 100%;
    height: 100%;
`

const MyPageSellerHeader = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    font-weight: ${Theme.fontWeight.bold};
    border-bottom: 3px solid ${Theme.colors.silverGray};
`

const MyPageProductMenuBar = styled.div`
    width: 97%;
    margin-bottom: 1rem;
`

const MyPageSellerMenuTab = styled.ul`
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    background-color: ${Theme.colors.darkBlack};
    padding: 1rem;
`

const MyPageSellerMenuList = styled.li`
    font-size: 1rem;
    font-weight: bold;
    display: inline-block;
    color: ${Theme.colors.whiteGray};
    padding: 1rem;
    &:hover {
        cursor: pointer;
        background-color: ${Theme.colors.darkRed};
    }
`

export default MyPageSellerOrderList
