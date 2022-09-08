import Container from "../../atoms/container/container"
import Text from "../../atoms/text/text"
import Button from "../../atoms/button/button"
import * as MyCart from "./style"

const CartBar = ({ uuid, number, name, img, price, quantity }) => {
    return (
        <Container width="100%">
            <MyCart.StyledCartContainer>
                <Button type="contrast" width="auto" value="x" />
                <MyCart.StyledCartImg src={`${process.env.PUBLIC_URL}/img/defaultImg.png`} />
                <MyCart.StyledCartContent>
                    <Text type="large" context="name" />
                    <Text type="default" context="content" />
                </MyCart.StyledCartContent>
                <Button type="black" width="auto" value="+" />
                <MyCart.StyledCartCount>
                    <Text type="default" context="1" />
                </MyCart.StyledCartCount>
                <Button type="black" width="auto" value="-" />
                <MyCart.StyledCartCount>
                    <Text type="default" context="500won" />
                </MyCart.StyledCartCount>
            </MyCart.StyledCartContainer>
        </Container>
    )
}

export default CartBar
