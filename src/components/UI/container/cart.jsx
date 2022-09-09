import { useCallback } from "react"
import Container from "../atoms/container/container"
import CartBar from "../blocks/cartBar/cartBar"
import Grid from "../atoms/grid/grid"

const Cart = () => {
    const cartItem = [
        {
            uuid: 1,
            name: "오렌지 마말레이드",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "매우 신선한 음료",
            quantity: 1,
            price: 900,
        },
        {
            uuid: 2,
            name: "크로아티아산 커피콩 15g",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "굉장히 쓴 커피",
            quantity: 1,
            price: 600,
        },
        {
            uuid: 3,
            name: "프랑스에서 만든 에스카르고",
            img: `${process.env.PUBLIC_URL}/img/defaultImg.png`,
            description: "달팽이 음식임",
            quantity: 2,
            price: 5000,
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
        <Container width="100%">
            {cartItem.map((item) => {
                return (
                    <Grid key={item.uuid}>
                        <CartBar
                            name={item.name}
                            img={item.img}
                            description={item.description}
                            quantity={item.quantity}
                            price={item.price}
                            onAddButtonClickEvent={handleAddButtonClick}
                            onMinusButtonClickEvent={handleMinusButtonClick}
                            onDeleteButtonClickEvent={handleDeleteButtonClick}
                        />
                    </Grid>
                )
            })}
        </Container>
    )
}

export default Cart
