import { useState, useCallback } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import CartBar from "@/components/UI/blocks/cart/cartBar"
import CartSidebar from "@/components/UI/blocks/cart/cartSidebar"
import DroppableBox from "@components/UI/blocks/dragdrop/droppableBox"
import DraggableBox from "@components/UI/blocks/dragdrop/draggableBox"
import Theme from "@/util/style/theme"

const CartContainer = () => {
    const [cartItems, setCartItems] = useState([
        {
            uuid: "abc1",
            name: "Mexican Limeade and Orageade",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "Limeade and Orangeade",
            quantity: 1,
            price: 5000,
        },
        {
            uuid: "abc2",
            name: "Hand made Croatian coffee brew",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "Hande made Croatian coffe",
            quantity: 1,
            price: 6000,
        },
        {
            uuid: "abc3",
            name: "Mongo banana and strawberry",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "Banana and strawberry",
            quantity: 1,
            price: 15000,
        },
        {
            uuid: "abc4",
            name: "Mongo banana and strawberry",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "Banana and strawberry",
            quantity: 1,
            price: 15000,
        },
        {
            uuid: "abc5",
            name: "Mongo banana and strawberry",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "Banana and strawberry",
            quantity: 1,
            price: 15000,
        },
    ])

    const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price, 0)
    const discount = 10

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
`

export default CartContainer
