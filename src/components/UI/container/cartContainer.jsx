import { useCallback } from "react"
import CartBar from "@/components/UI/blocks/cart/cartBar"
import CartSidebar from "@/components/UI/blocks/cart/cartSidebar"
import Text from "@components/UI/atoms/text/text"
import styled from "styled-components"
import Theme from "@/util/style/theme"

const CartContainer = () => {
    const cartItem = [
        {
            uuid: 1,
            name: "오렌지 마말레이드",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "매우 신선한 음료",
            quantity: 1,
            price: 5000,
        },
        {
            uuid: 2,
            name: "크로아티아산 커피콩 15g",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "굉장히 쓴 커피",
            quantity: 1,
            price: 6000,
        },
        {
            uuid: 3,
            name: "프랑스에서 만든 에스카르고",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "달팽이 음식임",
            quantity: 2,
            price: 15000,
        },
    ]

    const handleAddButtonClick = useCallback(() => {
        console.log("Add")
    }, [])

    const handleMinusButtonClick = useCallback(() => {
        console.log("Minus")
    }, [])

    const handleDeleteButtonClick = useCallback(() => {
        console.log("Delete")
    }, [])

    return (
        <CartMainContainer>
            <CartHeaderContainer>
                <Text type="large" context="Shopping bag" />
            </CartHeaderContainer>
            <CartBodyContainer>
                <CartBodyItemContainer>
                    {cartItem.map((item) => {
                        return (
                            <CartBarContainer key={item.uuid}>
                                <CartBar
                                    name={item.name}
                                    img={item.img}
                                    description={item.description}
                                    quantity={item.quantity}
                                    price={item.price}
                                    onAddButtonClickEvent={handleAddButtonClick}
                                    onMinusButtonClickEvent={
                                        handleMinusButtonClick
                                    }
                                    onDeleteButtonClickEvent={
                                        handleDeleteButtonClick
                                    }
                                />
                            </CartBarContainer>
                        )
                    })}
                </CartBodyItemContainer>
                <CartBodyPayMentContainer>
                    <CartSidebar />
                </CartBodyPayMentContainer>
            </CartBodyContainer>
        </CartMainContainer>
    )
}

const CartMainContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const CartHeaderContainer = styled.div`
    padding-bottom: 3.25rem;
    padding-left: 1.25rem;
    padding-top: 3rem;
    margin-bottom: 3.25rem;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.darkBlack};
`

const CartBodyContainer = styled.div`
    width: 100%;
`

const CartBarContainer = styled.div`
    margin-bottom: 2rem;
`

const CartBodyItemContainer = styled.div`
    width: 80%;
    float: left;
`

const CartBodyPayMentContainer = styled.div`
    width: 20%;
    float: right;
`

export default CartContainer
