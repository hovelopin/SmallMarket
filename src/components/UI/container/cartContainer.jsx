import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { DragDropContext } from "react-beautiful-dnd"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import CartBar from "@/components/UI/blocks/cart/cartBar"
import CartSidebar from "@/components/UI/blocks/cart/cartSidebar"
import DroppableBox from "@components/UI/blocks/dragdrop/droppableBox"
import DraggableBox from "@components/UI/blocks/dragdrop/draggableBox"
import Theme from "@util/style/theme"
import AuthService from "@/service/authService"
import CartService from "@/service/cartService"

const CartContainer = () => {
    const [cartItems, setCartItems] = useState([])

    const authState = AuthService.firebaseCurrentUserReuqest()
    const totalPrice = cartItems.length
        ? cartItems.reduce(
              (acc, cur) => acc + parseInt(cur.price) * parseInt(cur.quantity),
              0
          )
        : 0
    const discount = 10

    const history = useHistory()

    useEffect(async () => {
        if (!authState) return
        const res = await CartService.firebaseCartInformationRequest(
            authState.uid
        )
        const items = res || []
        setCartItems(items)
    }, [])

    const handleDragEnd = (result) => {
        const { destination, source } = result
        if (!destination) return
        const currentCartItems = [...cartItems]
        const dropCartItemIndex = result.destination.index
        const draggingItemIndex = source.index
        const removedCartItem = currentCartItems.splice(draggingItemIndex, 1)
        currentCartItems.splice(dropCartItemIndex, 0, removedCartItem[0])
        setCartItems(currentCartItems)
    }

    const handleAddButtonClick = useCallback(
        (productUuid) => async () => {
            const res = await CartService.firebaseCartQuantityChangeRequest(
                authState.uid,
                productUuid,
                "Increment"
            )
            if (res) {
                const items = await CartService.firebaseCartInformationRequest(
                    authState.uid
                )
                setCartItems(items)
            }
        },
        []
    )

    const handleMinusButtonClick = useCallback(
        (productUuid) => async () => {
            const res = await CartService.firebaseCartQuantityChangeRequest(
                authState.uid,
                productUuid,
                "Decrement"
            )
            if (res) {
                const items = await CartService.firebaseCartInformationRequest(
                    authState.uid
                )
                setCartItems(items)
            }
        },
        []
    )

    const handleDeleteButtonClick = useCallback(
        (uuid) => async () => {
            await CartService.firebaseCartDeleteItemRequest(authState.uid, uuid)
            const res = await CartService.firebaseCartInformationRequest(
                authState.uid
            )
            const items = res || []
            setCartItems(items)
        },
        []
    )

    const handlePayButtonClick = async () => {
        const cartItems = await CartService.firebaseCartInformationRequest(
            authState.uid
        )
        history.push({
            pathname: `/payment/${authState.uid}`,
            state: cartItems,
        })
    }

    if (!cartItems.length) {
        return (
            <Container width="100%" height="60vh">
                <Text type="large" context="Your cart is empty" />
            </Container>
        )
    }

    return (
        <CartMainContainer>
            <CartHeaderContainer>
                <Text type="large" context="Shopping cart" />
            </CartHeaderContainer>
            <DragDropContext onDragEnd={handleDragEnd}>
                <CartBodyContainer>
                    <CartBodyItemContainer>
                        <DroppableBox>
                            {cartItems.map((item, i) => {
                                return (
                                    <DraggableBox
                                        key={item.uuid}
                                        item={item}
                                        index={i}
                                    >
                                        <CartBarContainer>
                                            <CartBar
                                                uuid={item.uuid}
                                                name={item.name}
                                                img={item.img}
                                                description={item.description}
                                                quantity={item.quantity}
                                                price={item.price}
                                                onAddButtonClickEvent={
                                                    handleAddButtonClick
                                                }
                                                onMinusButtonClickEvent={
                                                    handleMinusButtonClick
                                                }
                                                onDeleteButtonClickEvent={
                                                    handleDeleteButtonClick
                                                }
                                            />
                                        </CartBarContainer>
                                    </DraggableBox>
                                )
                            })}
                        </DroppableBox>
                    </CartBodyItemContainer>
                    <CartBodyPayMentContainer>
                        <CartSidebar
                            totalPrice={totalPrice}
                            discount={discount}
                            totalQuantity={cartItems.length}
                            onPayButtonClickEvent={handlePayButtonClick}
                        />
                    </CartBodyPayMentContainer>
                </CartBodyContainer>
            </DragDropContext>
        </CartMainContainer>
    )
}

const CartMainContainer = styled.div`
    width: 100%;
    height: 100%;
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
    display: flex;
    justify-content: space-between;
    overflow: auto;
`

const CartBarContainer = styled.div`
    margin-bottom: 2rem;
`

const CartBodyItemContainer = styled.div`
    width: 80%;
`

const CartBodyPayMentContainer = styled.div`
    width: 20%;
    margin-bottom: 2rem;
`

export default CartContainer
